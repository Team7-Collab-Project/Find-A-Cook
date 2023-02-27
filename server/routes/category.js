// const { request } = require('express');
const express = require('express');
const router = express.Router();
// const { create: createCategory } = require('../controllers/category');
const categoryController = require('../controllers/category');

router.post('/', categoryController.create);

module.exports = router;
