const Repository = require("../repositories/repository");

module.exports = class VehiculoController {
  
  constructor() {
    this.repository = new Repository()
  }

   async addVehiculo(ctx) {
    try {

      let data = ctx.request.body;      
      let message =  await this.repository.add(data);
      ctx.body = {data: message};
    } catch (err) {
      ctx.status = 400;
      ctx.body = { status: 400, message: err.message };
    }
  }

   async getAll(ctx) {
    try {
      let message =  await this.repository.getAll()
      ctx.body = {data: message};
    } catch (err) {
      ctx.status = 400;
      ctx.body = { status: 400, message: err.message };
    }
  }

};
