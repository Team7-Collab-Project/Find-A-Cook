const Category = require('../schema/MenuCategorySchema');

exports.create = async (req, res) => {
    const { category_name, category_description } = req.body;
    console.log('New Category: ', req.body)

    try {
        let newCategory = new Category({
            category_name: category_name,
            category_description: category_description,
        });

        await newCategory.save();

        res.status(200).json({
            category: newCategory,
            successMessage: `${newCategory.category_name} was created :)`,
        });
    } catch (err) {
        console.log('Category Create Error: ', err);
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
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (err) {
      console.log('Category ReadAll Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };


  exports.delete = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const deleteCategory = await Category.findByIdAndDelete(categoryId);

      res.json(deleteCategory);
    } catch (err) {
      console.log(err, 'categoryController.delete error');
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  }

  exports.read = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const category = await Category.findById(categoryId);

      res.json(category);
      console.log(category);
    } catch (err) {
      console.log('Category Read Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };


  exports.update = async (req, res) => {
    const categoryId = req.params.categoryId;
  
    const oldCategory = await Category.findByIdAndUpdate(categoryId, req.body);
  
    res.json({
      successMessage: 'Category successfully updated',
    });
  };
