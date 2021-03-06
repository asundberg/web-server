var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; 
// All upper case in a variable in js means that you should NOT change the value of the variable. Port 3000 is usually not reserved, so it won't cause any conflicts or problems.
// process.env.PORT is a heroku port.

var middleware = require('./middleware.js');

// Middleware is a part of express.

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);
// If this was added after app.get, it would never run, so it's important that it's up above.

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT + '!');
}); 
