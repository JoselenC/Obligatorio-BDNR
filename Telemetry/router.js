const Router = require("koa-router");
const router = new Router();
const VehiculoController = require("./src/services/vehiculoController")
const vehiculoController = new VehiculoController();

router.post("/telemetry", async (ctx) =>
  await vehiculoController.addVehiculo(ctx)
);

router.get("/telemetry", async (ctx) =>
  await vehiculoController.getAll(ctx)
);

module.exports = router;
