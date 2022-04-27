var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/studentlogin', function(req, res, next) {
    var email = req.body.email
    var password=req.body.password
    // console.log(req.body)
    var sql= "SELECT * FROM STUDENT WHERE email='"+ email +"'and password=md5('" + password + "')";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    // console.log(data);
    if(data.length!=0){
      console.log("HI");
      return res.redirect('/prof/project-list');
      // return "Hi";
    }
    else{
      console.log("BYE");
      return res.redirect('/');
      // return "Bye";
    }
  });
  // return res.redirect('/');
});
module.exports = router;