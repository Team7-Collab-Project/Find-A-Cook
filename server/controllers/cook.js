const Cook = require('./../models/Cook');
const fs = require('fs');

exports.read = async (req, res) => {
    try {
      const cookId = req.params.cookId;
      const cook = await Cook.findById(cookId);

      res.json(cook);
      console.log(cook);
    } catch (err) {
      console.log('Cook Read Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };

  exports.update = async (req, res) => {
    const cookId = req.params.cookId;

    if (req.file !== undefined) {
      req.body.filename = req.file.filename;
    }
  
    const oldCook = await Cook.findByIdAndUpdate(cookId, req.body);
  
    if (req.file !== undefined && req.file.filename !== oldCook.filename) {
      fs.unlink(`uploads/${oldCook.filename}`, err => {
        if (err) throw err;
        console.log('Image deleted from the filesystem');
      });
    }
  
    res.json({
      successMessage: 'Cook successfully updated',
    });
  };