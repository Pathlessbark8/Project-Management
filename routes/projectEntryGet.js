var express = require('express');
var router = express.Router();

router.get('/project-entry',checkUserSession, function(req, res, next) {
    res.render('project-entry.ejs');
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