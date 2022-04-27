var express = require('express');
var router = express.Router();

router.get('/intersignup', function(req, res, next) {
    res.render('interSignup.ejs');
});
module.exports = router;