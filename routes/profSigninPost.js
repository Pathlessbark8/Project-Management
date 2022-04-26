var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/prof', function(req, res, next) {
    var email = req.body.email
    var password=req.body.password
    console.log(email)
    var sql= "SELECT * FROM PROFESSOR WHERE email='"+ email +"'and password=md5('" + password + "')";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log("Successful Sign in!")
  });
});
module.exports = router;