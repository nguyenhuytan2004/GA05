const express = require("express");
const router = express.Router();

const productController = require("./ProductController");

router.get("/product/:id", productController.index);

module.exports = router;