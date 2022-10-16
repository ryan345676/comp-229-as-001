const mongoose = require('mongoose'); 
const passport = require('passport');
const User = require("./user")

module.exports = authUser =(user,password,done)=>{
    User.findOne({username:user},(err,results)=>{
      if(err){
        return done(null,false);
      }
      if(!results){
        return done(null,false);
      }
      if(results){
        if(results.password!=password){
          return done(null,false)
        }else{
          return done(null,{id:results._id,name:results.username})
        }
      }
    })
  }

passport.serializeUser( (userObj, done) => { done(null, userObj)});
passport.deserializeUser((userObj, done) => { done (null, userObj )});