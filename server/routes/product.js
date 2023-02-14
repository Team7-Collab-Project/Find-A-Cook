const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const productController = require('../controllers/product')

router.post(
	'/',
	upload.single('productImage'),
	productController.create
);

module.exports = router;