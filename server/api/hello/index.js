'use strict';

var express = require('express');
var controller = require('./hello.controller');

var router = express.Router();

router.get('/', controller.hello);
router.get('/country', controller.country);
router.post('/login', controller.login);

module.exports = router;
