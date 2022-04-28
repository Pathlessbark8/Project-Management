var express = require('express');
var router = express.Router();
const session = require('express-session');
var cookieParser = require('cookie-parser');
const store = new session.MemoryStore();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/project-list', function(req, res, next) {
    console.log(req.body);
    var sid = req.session.userid;
    console.log(sid)
  var prof_id = "1";
  var proj_id=req.body.proj_id;
  var sql="INSERT into proj_stud_reln VALUES ('" + sid + "','"  + proj_id + "');";
//   console.log(router);
    console.log("Hello");
    console.log(sql)
    // console.log(password);
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    // console.log(req.body)
    console.log("Valued Entered");
    });
});
module.exports = router;