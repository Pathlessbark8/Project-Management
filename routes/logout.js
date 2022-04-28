var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/logout', function(req, res, next) {
    console.log("Hi");
    req.session.authenticated = false;
    req.session.destroy();

    return res.redirect('/');
});
module.exports = router;