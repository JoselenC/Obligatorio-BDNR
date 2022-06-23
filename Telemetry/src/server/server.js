module.exports.initServer = async function () {
  const router = require('../../router');
  const argv = require('minimist')(process.argv.slice(2));
  const Config = require("config");
  const Koa = require('koa');
  const bodyParser = require("koa-bodyparser");
  const cors = require('@koa/cors');
  const app = new Koa();
  app.use(cors())
  const port = Config.get("port");
  var passport= require ("passport");

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(passport.initialize());
  app.listen(port);


  console.log(`Server started, see http://localhost:${port}`);
};
