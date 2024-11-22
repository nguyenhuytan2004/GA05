const express = require("express");
const router = express.Router();

const userController = require("./UserController");

router.get("/register", userController.register);
router.get("/login", userController.login);
router.get("/cart", userController.cart);
router.get("/checkout", userController.checkout);

module.exports = router;
