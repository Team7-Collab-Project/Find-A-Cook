const Product = require('../schema/MenuItemSchema');
// const MenuCategorySchema = require('./MenuCategorySchema');

exports.create = async (req, res) => {
    console.log('req.body: ', req.body);
    // console.log('req.file: ', req.file);
    { /**ADD USER */}

    // const {filename} = req.file;
    const {item_name, product_description, price, category} = req.body;

    try{
        let newProduct = new Product({
        // newProduct.filename = filename;
        category:category,
        product_description:product_description,
        item_name:item_name,
        price:price,
        });
        
        await newProduct.save();

        res.status(200).json({
            successMessage: `${newProduct.item_name} was created :)`,
            newProduct,
        });
    } catch (err) {
        console.log('Product Create Error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }

};


exports.readAll = async (req, res) => {
    try {
      const products = await Product.find({}).populate('category', 'category_name');
      res.status(200).json(products);
    } catch (err) {
      console.log('Product ReadAll Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };