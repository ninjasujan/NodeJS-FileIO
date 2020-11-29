const express = require("express");
const router = express();
const { addProductToDB } = require("../controllers/product");

router.post("/add-product", addProductToDB);

module.exports = router;
