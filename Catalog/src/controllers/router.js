const Router = require("koa-router");
const ProductController = require("./productController");

const router = new Router();
const productController = new ProductController();

router.post("/catalog/product", async (ctx) => {
  await productController.save(ctx)
}
);

router.get("/catalog/product", async (ctx) => {
  await productController.getData(ctx)
}
);


module.exports = router;