var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('login.ejs');
});
module.exports = router;