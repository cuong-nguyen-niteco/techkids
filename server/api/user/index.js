'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/list', controller.list);
router.get('/:username', controller.getUser);
router.post('/', controller.create);
router.post('/login', controller.login);

module.exports = router;
