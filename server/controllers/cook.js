const Cook = require('./../models/Cook')

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

  