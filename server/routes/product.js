const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const productController = require('../controllers/product')

router.post('/',productController.create);

router.get('/', productController.readAll);

module.exports = router;