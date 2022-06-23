const ProductRepository = require("../repositories/productRepository");



module.exports = class GatewayController {
  constructor() {    
    this.productRepository = new ProductRepository();
  }
  
  async save(ctx) {
    try {
      let data = ctx.request.body;
      let con = await this.productRepository.saveProduct(data);
      ctx.body = con;
    } catch (err) {
      ctx.status = 400;
      ctx.body = { status: 400, message: err.message };
      log.error(
        `${ctx.request.method} on url ${ctx.request.url} -> ${ctx.body.message}`
      );
    }
  }

  async getData(ctx) {
    try {
      let list = await this.productRepository.getAll()
      console.log(list)
      ctx.body = { data: list };
      return list
    } catch (err) {
      console.log(err.message)
      ctx.status = 404;
      ctx.body = { status: 404, message: err.message };
    }
  }

};

