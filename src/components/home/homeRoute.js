const express = require("express");
const router = express.Router();

const homeController = require("./HomeController");

router.get("/404", homeController._404);
router.use("/", homeController.index);

module.exports = router;
