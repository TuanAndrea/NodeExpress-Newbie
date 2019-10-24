var express = require('express');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

//Lay user tu lowdb
router.get('/', controller.index);

//Tim kiem user
router.get('/search', controller.search);

//Render trang create
router.get('/create', controller.create);

//dynamic Router view user
router.get('/:id', controller.get);

//Code tao user luu vao lowdb
//middle ware: sau khi check validate xong thi next()
router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;