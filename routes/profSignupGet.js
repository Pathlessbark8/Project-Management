var express = require('express');
var router = express.Router();

router.get('/prof', function(req, res, next) {
    res.render('profSignup.ejs');
});
module.exports = router;