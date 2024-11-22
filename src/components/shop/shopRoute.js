const express = require("express");
const router = express.Router();

const shopController = require("./ShopController");

router.get("/product", shopController.product);
router.use("/", shopController.index);

module.exports = router;
