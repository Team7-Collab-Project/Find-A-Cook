const express = require('express');
const router = express.Router();
const cookController = require('../controllers/cook');
const upload = require('../middleware/multer');

router.get('/:cookId', cookController.read);
router.put('/:cookId', upload.single('filename'), cookController.update);

module.exports = router;