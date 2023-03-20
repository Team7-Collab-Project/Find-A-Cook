const Product = require("../schema/MenuItemSchema");

exports.searchByQueryType = async (req, res) => {
  const { type, query } = req.body;
  console.log(req.body);

  try {
    let products;

    console.log('query:', query);

    switch (type) {
      case "text":
        products = await Product.find({ $text: { $search: query } });
        console.log(products);
        break;
      case "category":
        products = await Product.find({ category: query });
        console.log(query);

        // products = await Product.find({ productCategory: query })
        // if (products.length === 0) {
        //     return res.status(404).json({
        //         errorMessage: 'No products found for the specified category',
        //     });
        // }
    
        break;
    }
    if (!products.length > 0) {
      products = await Product.find({});
    }
    res.json({ products });
  } catch (err) {
    console.log(err, "filter Controller error");
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};
