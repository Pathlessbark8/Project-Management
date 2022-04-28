var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/studentlogin', function(req, res, next) {

    const {email, password} = req.body;

    // console.log(req.body)

    var sql= "SELECT * FROM STUDENT WHERE email='"+ email +"'and password=md5('" + password + "')";
    
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    // console.log(data);
    if(data.length!=0){
      console.log(email + " Successfully loged in!");

      
      req.session.authenticated = true;
      req.session.userid = data[0].sid;

      // console.log(req.session.userid);

      return res.redirect('/student/project-list');
      
    }
    else{

      req.session.authenticated = false;

      console.log("Wrong credentials ... Please try Again!");
      
      // return res.redirect('/');
    }
  });
  // return res.redirect('/');
});
module.exports = router;