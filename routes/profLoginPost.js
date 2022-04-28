var express = require('express');
var router = express.Router();
const session = require('express-session');
var cookieParser = require('cookie-parser');
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/prof', function(req, res, next) {
    // var email = req.body.email
    // var password=req.body.password

    const {email, password} = req.body;

    console.log(req.sessionID)
    var sql= "SELECT * FROM PROFESSOR WHERE email='"+ email +"'and password=md5('" + password + "')";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    if(data.length!=0){
      console.log("Successful Sign in!")
      return res.redirect('/prof/project-list');
    }
    else{
      console.log("Please try again!")
    }
  });
});
module.exports = router;