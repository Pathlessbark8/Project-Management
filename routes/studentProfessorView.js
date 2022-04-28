var express = require('express');
var router = express.Router();
const session = require('express-session');
var cookieParser = require('cookie-parser');
const store = new session.MemoryStore();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/student-list',checkUserSession, function(req, res, next) {
    var proj_id = req.session.key;
    var proj_title = req.session.title
    console.log(proj_title)
    var sql="SELECT * FROM student s, proj_stud_reln psr where psr.sid=s.sid and proj_id = '" + proj_id + "';";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('student-list-professor', { title: 'Project List', userData: data, project_title: proj_title});
  });
});

function checkUserSession( req, res, next )
{
    // console.log(req.session.userid);
    if( req.session.userid )
    {
        next();
    }
    else
    {
        res.redirect('/');
    }
}
module.exports = router;