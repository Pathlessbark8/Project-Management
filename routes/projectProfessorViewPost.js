var express = require('express');
var router = express.Router();
const session = require('express-session');
var cookieParser = require('cookie-parser');
const store = new session.MemoryStore();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/project-list', function(req, res, next) {

  req.session.key = req.body.proj_id;
  console.log(req.session.key);
  
  return res.redirect('/prof/student-list');
});
module.exports = router;