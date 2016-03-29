'use strict';

var express = require('express');
var controller = require('./post.controller.js');

var router = express.Router();

router.get('/categories', controller.getCategories);
router.get('/by-category/:category', controller.getPostsByCategory);
router.get('/:postUrlName', controller.getPostByUrlName);
router.get('/all', controller.getPosts);
router.post('/add', controller.addPost);
router.post('/edit', controller.editPost);
router.post('/delete', controller.deletePost);

module.exports = router;
