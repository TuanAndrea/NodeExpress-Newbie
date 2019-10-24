var express = require('express');

var controller = require('../controllers/user.controller');

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
router.post('/create', controller.postCreate);

module.exports = router;