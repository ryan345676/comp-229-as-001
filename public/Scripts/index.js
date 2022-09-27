// var express = require("express");
// var app = express(); 
// var path = require("path");

// var HTTP_PORT = process.env.PORT || 8080;

// // call this function after the http server starts listening for requests
// function onHttpStart() {
//   console.log("Express http server listening on: " + HTTP_PORT);
// }

// // setup a 'route' to listen on the default url path (http://localhost)
// app.get("/", function(req,res){
//   res.sendFile(path.join(__dirname, "/views/home.html"));
// });

// // setup another route to listen on /about
// app.get("/about", function(req,res){
//   res.sendFile(path.join(__dirname, "/views/about.html"));
// });
// app.get("/contact", function(req,res){
//   res.sendFile(path.join(__dirname, "/views/contact.html"));
// });
// app.get("/project", function(req,res){
//   res.sendFile(path.join(__dirname, "/views/project.html"));
// });
// app.get("/services", function(req,res){
//   res.sendFile(path.join(__dirname, "/views/services.html"));
// });

// // setup http server to listen on HTTP_PORT
// app.listen(HTTP_PORT, onHttpStart);