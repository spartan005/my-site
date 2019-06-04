var express = require('express');
var app = express();
var port = 8080;

var router = require('./app/routes');
app.use('/', router);

app.use(express.static(__dirname + '/public'));

// start server
app.listen(port, function() {
	console.log('app started. Listening on port '+port);	
});
