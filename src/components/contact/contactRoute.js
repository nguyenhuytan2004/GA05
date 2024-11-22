const express = require("express");
const router = express.Router();

const contactController = require("./ContactController");

router.use("/", contactController.index);

module.exports = router;
