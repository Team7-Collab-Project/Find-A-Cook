const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const productController = require('../controllers/product')

router.post('/',productController.create);

module.exports = router;