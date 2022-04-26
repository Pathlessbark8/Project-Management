var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/studentSignUp', function(req, res, next) {
  console.log("hi");
    var sid = req.body.sid
    var fname = req.body.fname
    var lname = req.body.lname
    var branch = req.body.branch
    var cgpa = req.body.cgpa
    var password=req.body.password
    // console.log(req.body)
    var sql="insert into student VALUES ('" + sid + "','" + branch + "','" + fname + "','" + lname +"', '" + cgpa +"', MD5('"+password+"'));";
    // console.log(password);
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log("Sign Up Successful!")
  });
  res.redirect('/');
  next();
});
module.exports = router;