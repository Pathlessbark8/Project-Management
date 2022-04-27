var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/project-entry', function(req, res, next) {

    var prof_id = '1'

    var proj_id = req.body.proj_id
    var title = req.body.title
    var type = req.body.type
    var desc = req.body.desc
    var pre_req = req.body.pre_req

    // console.log(req.body)
    // console.log(prof_id)
    
    var sql="insert into project VALUES ('" + proj_id + "','" + title + "','" + type + "','" + desc +"','"+pre_req+"', '" + prof_id+ "');";
    
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(sql)
    console.log("New Project Values Entered in SQL")
  });
  return res.redirect('/prof/project-list')
});
module.exports = router;