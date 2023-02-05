const express = require('express');
const router = express.Router();
const upload = require('../misc/multer');
const productController = require('../controller/products');

router.post(
	'/',
	upload.single('productImage'),
	productController.create
);

module.exports = router;