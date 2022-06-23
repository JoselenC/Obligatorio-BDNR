module.exports.initServer = async function () {
  const router = require('./src/controllers/router');
  const argv = require('minimist')(process.argv.slice(2));
  const Config = require("config");
  const Koa = require('koa');
  const app = new Koa();
  const cors = require('@koa/cors');
  app.use(cors())
  const bodyParser = require("koa-bodyparser");
  const port = Config.get("port");
  var passport= require ("passport");
  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(passport.initialize());

  app.listen(port);


  console.log(`Server started, see http://localhost:${port}`);
};
