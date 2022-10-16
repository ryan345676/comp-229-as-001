let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

// session setting for passport
const session = require("express-session");
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

// display message after redirect by session and flash
const flash = require("connect-flash");
app.use(flash());
app.use((req, res, next) => {
  res.locals.successMessage = req.flash("successMessage");
  res.locals.errorMessage = req.flash("errorMessage");
  res.locals.error = req.flash("error");
  next();
});

// passport
require("./models/passport");
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(authUser));

module.exports = app;
