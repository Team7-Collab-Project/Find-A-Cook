const express = require('express');
const router = express.Router();
const cookController = require('../controllers/cook');

router.post('/', cookController.create);
router.get('/', cookController.readAll);
router.get('/:cookId', cookController.read);
router.delete('/:cookId', cookController.delete);

module.exports = router;
