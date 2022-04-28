var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/project-list', function(req, res, next) {
    var sql='SELECT * FROM offers';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('project-list-student', { title: 'Project List', userData: data});
  });
});
module.exports = router;