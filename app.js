const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

/* importing routes */
const productRoutes = require("./routes/product");

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/product", productRoutes);

app.use((err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.json({ message: "operation failed", err: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});
