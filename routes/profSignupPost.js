var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/prof', function(req, res, next) {
    var pid = req.body.pid
    var fname = req.body.fname
    var lname = req.body.lname
    var dept = req.body.dept
    var email = req.body.email
    var password=req.body.password
    
    var sql="insert into professor VALUES ('" + pid + "','" + email + "','" + fname + "','" + lname +"', MD5('"+password+"'), '" + dept+ "');";
    console.log(password);
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log("Profeesor Sign Up Values Entered in SQL")
  });
});
module.exports = router;