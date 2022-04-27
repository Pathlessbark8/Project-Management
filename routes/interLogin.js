var express = require('express');
var router = express.Router();

router.get('/interlogin', function(req, res, next) {
    res.render('interLogin.ejs');
});
module.exports = router;