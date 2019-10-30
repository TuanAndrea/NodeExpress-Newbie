var express = require('express');
var multer = require('multer');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var upload = multer({
	dest: './public/uploads/'
});

var router = express.Router();

//Lay user tu lowdb
router.get('/', controller.index);

//Cookie
router.get('/cookie', function(req, res, next) {
	res.cookie('user-id', 12345);
	res.send('Hello');
});

//Tim kiem user
router.get('/search', controller.search);

//Render trang create
router.get('/create', controller.create);

//dynamic Router view user
router.get('/:id', controller.get);

//Code tao user luu vao lowdb
//middle ware: sau khi check validate xong thi next()
router.post('/create', 
	upload.single('avatar'), 
	validate.postCreate, 
	controller.postCreate
);

module.exports = router;