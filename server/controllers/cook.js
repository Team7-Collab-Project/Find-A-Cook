const Cook = require('../schema/CookSchema');

exports.create = async (req, res) => {
    const { _id, user_id, specialties, description, date_joined, application_status } = req.body;
    console.log('New Cook: ', req.body)

    try {
        let newCook = new Cook({
            _id: _id,
            user_id: user_id,
            specialties: specialties,
            description: description,
            date_joined: date_joined,
            application_status: application_status
        });

        await newCook.save();

        res.status(200).json({
            cook: newCook,
            successMessage: `${newCook.cook_name} was created :)`,
        });
    } catch (err) {
        console.log('Cook Create Error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};


// exports.readAll = async (req, res) => {
//     // const { category_name, category_description } = req.body;
//     // console.log('!!!!!!!!!!!!!!!!!!', req.body)

//     try {

//         const categories = await Category.find({});

//         // console.log('Category: ', categories)
//         res.status(200).json({
//             categories,
//         })
//     } catch (err) {
//         console.log('Category ReadAll Error: ', err);
//         res.status(500).json({
//             errorMessage: 'Please try again later',
//         });
//     }
// };

exports.readAll = async (req, res) => {
    try {
      const cooks = await Cook.find({});
      res.status(200).json(cooks);
    } catch (err) {
      console.log('Cook ReadAll Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };


  exports.delete = async (req, res) => {
    try {
      const cookId = req.params.cookId;
      const deleteCook = await Cook.findByIdAndDelete(cookId);

      res.json(deleteCook);
    } catch (err) {
      console.log(err, 'cookController.delete error');
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  }

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
  
    const oldCook = await Cook.findByIdAndUpdate(cookId, req.body);
  
    res.json({
      successMessage: 'Cook successfully updated',
    });
  };
