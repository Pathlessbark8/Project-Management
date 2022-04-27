var express = require('express');
var router = express.Router();

router.get('/project-entry', function(req, res, next) {
    res.render('project-entry.ejs');
});
module.exports = router;