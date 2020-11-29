const Product = require("../models/Product");

exports.addProductToDB = (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const newProduct = new Product(null, title, price, imageUrl, description);
  newProduct.save();
  return res.status(201).json({ message: "Product saved to DB" });
};

exports.deleteProductFromFile = (req, res, next) => {
  Product.deleteProductById(req.params.id);
  return res.status(200).json({ message: "Product deleted.!" });
};

exports.getAllProductsFromFile = (req, res, next) => {
  Product.allProducts((products) => {
    return res.status(200).json(products);
  });
};
