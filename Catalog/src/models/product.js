const mongoose = require("mongoose");
const Product = mongoose.model(
  "product",
  mongoose.Schema({
    Id: { type: Number},
    Name: { type: String},
    Description: { type: String},
    Price:  { type: Number},
    Type: { type: String},
    ManufacturerId: { type: Number},
    Images: { type: String}

  }
  )
);

module.exports = Product;
