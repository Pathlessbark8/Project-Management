var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/project-list', function(req, res, next) {
    var prof_id = '1';
    var sql="SELECT * FROM project WHERE prof_id = '" + prof_id + "';";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('project-list-professor', { title: 'Project List', userData: data});
  });
});
module.exports = router;