var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = router;

// homepage
router.get('/', function(req, res) {
	res.sendfile(path.join(__dirname, '../index.html'));
});

// about page
router.get('/about', function(req, res) {
	res.sendfile(path.join(__dirname, '../about.html'));
});

router.get('/contact', function(req, res) {
	res.sendfile(path.join(__dirname, '../contact.html'));
});


router.get('/architecture_1', function(req, res) {
	res.sendfile(path.join(__dirname, '../arch1.html'));
});

router.get('/architecture_2', function(req, res) {
	res.sendfile(path.join(__dirname, '../arch2.html'));
});
