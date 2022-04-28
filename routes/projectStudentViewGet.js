var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/project-list',checkUserSession, function(req, res, next) {

    var sql='SELECT * FROM offers';
    
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('project-list-student', { title: 'Project List', userData: data});
  });
});

function checkUserSession( req, res, next )
{
    if( req.session.user_id )
    {
        next();
    }
    else
    {
        res.redirect('/');
    }
}
module.exports = router;