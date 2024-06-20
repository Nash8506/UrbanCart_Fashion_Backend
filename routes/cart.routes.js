const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");
const authenticate = require("../middlewares/user.middleware");

router.get("/", authenticate, cartController.findUserCart);
router.put("/", authenticate, cartController.addItemToCart);

module.exports = router;