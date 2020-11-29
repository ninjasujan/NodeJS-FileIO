const Product = require("../models/Product");

exports.addProductToDB = (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const newProduct = new Product(null, title, price, imageUrl, description);
  newProduct.save();
  res.json({ message: "Product saved to DB" });
};
