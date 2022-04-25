var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/prof-list', function(req, res, next) {
    var sql='SELECT * FROM professor';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('prof-list', { title: 'Prof List', userData: data});
  });
});
module.exports = router;