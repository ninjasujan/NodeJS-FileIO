const express = require("express");
const router = express();
const {
  addProductToDB,
  deleteProductFromFile,
  getAllProductsFromFile,
} = require("../controllers/product");

router.post("/add-product", addProductToDB);

router.delete("/delete/:id", deleteProductFromFile);

router.get("/all", getAllProductsFromFile);

module.exports = router;
