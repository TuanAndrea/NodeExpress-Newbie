var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

//doc du lieu tu client gui len va chuyen sang obj luu tru vao req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Render file index dau tien
app.get('/', function(req, res) {
	res.render('index', { //path
		name: 'Coders.Osaka'
	});
});

app.use(express.static('public'));

app.use('/users', userRoute);

//start server
app.listen(port, function() {
	console.log('Server listening on port ' + port);
});