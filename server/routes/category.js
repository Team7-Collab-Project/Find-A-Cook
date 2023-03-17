const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

router.post('/', categoryController.create);
router.get('/', categoryController.readAll);
router.get('/:categoryId', categoryController.read);
router.delete('/:categoryId', categoryController.delete);

module.exports = router;
