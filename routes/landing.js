var express = require('express');
var router = express.Router();
const session = require('express-session');

router.get('/', function(req, res, next) {
    console.log(req.sessionID);
    res.render('landing.ejs');
});
module.exports = router;