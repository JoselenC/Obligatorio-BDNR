const Repository = require('./repository');
const Product = require('../models/product')
require("dotenv").config();

module.exports = class ProductRepository {

  constructor() {
    this.repository = new Repository();
  }

  async getAll() {
    var query = await Product.find();
    let products = await query;
    return products.map((product) => product.toObject());
  }

  async saveProduct(data) {
      let product = await Product.create(data);
      return product.toObject();
  }
}