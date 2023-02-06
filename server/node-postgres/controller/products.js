const Product = require('../models/products');

exports.create = async (req, res) => {
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);

    const {productImage} = req.file;
    const {productName, productDescription, productPrice} = req.body;

    try{
        let product = new Product();
        product.productImage = productImage;
        product.product_name = productName;
        product.product_desc = productDescription;
        product.product_price = productPrice;        

        await product.save();

        res.json({
            successMessage: `${productName} was created!`,
            product
        })
    } catch (err){
        console.log(err, 'productController.create error :( ');
        res.status(500).json({
            errorMessage: 'Try Again!'
        })
    }


    // res.json({
    //     message: 'Product Controller'
    // })
}