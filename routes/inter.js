var express = require('express');
var router = express.Router();

router.get('/inter', function(req, res, next) {
    res.render('inter.ejs');
});
module.exports = router;