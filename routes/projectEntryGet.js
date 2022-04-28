var express = require('express');
var router = express.Router();

router.get('/project-entry',checkUserSession, function(req, res, next) {
    res.render('project-entry.ejs');
});

function checkUserSession( req, res, next )
{
    console.log(req.session.userid);
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