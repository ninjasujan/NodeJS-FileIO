const path = require("path");
const fs = require("fs");

const filePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, price, imageUrl, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save() {
    getProductsFromFile((products) => {
      const productId = new Date().getTime();
      this.id = productId;
      products.push(this);
      console.log("[Product List]", products);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log("ERROR IN DB");
        throw err;
      });
    });
  }

  static deleteProductById(id) {
    getProductsFromFile((products) => {
      const updatedProductList = products.filter((prod) => prod.id != id);
      fs.writeFile(filePath, JSON.stringify(updatedProductList), (err) => {
        console.log(err);
      });
    });
  }

  static allProducts(cb) {
    getProductsFromFile(cb);
  }
};
