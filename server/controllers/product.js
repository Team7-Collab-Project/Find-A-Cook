const Product = require('../schema/MenuItemSchema');
const fs = require('fs');
// const MenuCategorySchema = require('./MenuCategorySchema');

exports.create = async (req, res) => {
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);
    { /**ADD USER */}

    const {filename} = req.file;
    const {item_name, product_description, price, category} = req.body;

    try{
        let newProduct = new Product();
        newProduct.filename = filename;
        newProduct.item_name = item_name;
        newProduct.product_description = product_description;
        newProduct.price = price;
        newProduct.category = category;

        
        await newProduct.save();

        res.status(200).json({
            successMessage: `${item_name} was created :)`,
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


  exports.read = async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);

      res.json(product);
      console.log(product);
    } catch (err) {
      console.log('Product Read Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };


  exports.update = async (req, res) => {
    const productId = req.params.productId;

    if (req.file !== undefined) {
      req.body.filename = req.file.filename;
    }
  
    const oldProduct = await Product.findByIdAndUpdate(productId, req.body);
  
    if (req.file !== undefined && req.file.filename !== oldProduct.filename) {
      fs.unlink(`uploads/${oldProduct.filename}`, err => {
        if (err) throw err;
        console.log('Image deleted from the filesystem');
      });
    }
  
    res.json({
      successMessage: 'Product successfully updated',
    });
  };


  exports.delete = async (req, res) => {
    try {
      const productId = req.params.productId;
      const deleteProduct = await Product.findByIdAndDelete(productId);

      fs.unlink(`uploads/${deleteProduct.filename}`, (err) =>{
        if (err) throw err;
        console.log(
          'Image successfully deleted from filesystem: ',
          deleteProduct.filename
        );
      });
      res.json(deleteProduct);
    } catch (err) {
      console.log(err, 'productController.delete error');
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  }