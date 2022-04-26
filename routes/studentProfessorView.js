var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/student-list', function(req, res, next) {
    var proj_id = '2';
    var sql="SELECT * FROM student s, proj_stud_reln psr where psr.sid=s.sid and proj_id = '" + proj_id + "';";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('student-list-professor', { title: 'Project List', userData: data});
  });
});
module.exports = router;