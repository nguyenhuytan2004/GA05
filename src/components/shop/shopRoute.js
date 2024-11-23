const express = require("express");
const router = express.Router();

const shopController = require("./ShopController");
const productRouter = require("./product/productRoute");

router.get("/product/:id", productRouter);
router.get("/product", shopController.product);
router.get("/research", shopController.research);
router.use("/", shopController.index);

module.exports = router;
