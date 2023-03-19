const express = require('express');
const router = express.Router();
const cookController = require('../controllers/cook')

router.get('/:cookId', cookController.read);

module.exports = router;