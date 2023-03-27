const Cook = require("../models/Cook");

exports.searchByQueryType = async (req, res) => {
  const { type, query } = req.body;
  console.log(req.body);

  try {
    let cooks;

    console.log('query:', query);

    console.log("Type: ", type);
    switch (type) {
      case "cuisine":
        cooks = await Cook.find({ specialties: query.cuisine });
        console.log(cooks);
        break;
      case "dish":
        cooks = await Cook.find({ "menuItems.name": query.dish });
        console.log(cooks);
        break;
    }
    if (!cooks.length > 0) {
      cooks = await Cook.find({});
    }
    res.json({ cooks });
  } catch (err) {
    console.log(err, "filter Controller error");
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};