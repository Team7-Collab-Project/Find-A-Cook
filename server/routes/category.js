const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

// router.post('/', categoryController.create);
router.post('/', function(req, res){
    categoryController.create
  });
// router.get('/', categoryController.readAll);
router.get('/', function(req, res){
    categoryController.create
  });

module.exports = router;