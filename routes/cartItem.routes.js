const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");
const authenticate = require("../middlewares/authenticate");

router.put("/:id",authenticate, cartController.updateCartItem);
router.delete("/:id",authenticate, cartItemController.removeCartItem);

module.exports = router;