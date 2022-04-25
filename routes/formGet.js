var express = require('express');
var router = express.Router();
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/form', function(req, res, next) {
    res.render('form.ejs')
});
module.exports = router;