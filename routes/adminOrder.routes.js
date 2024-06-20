const express = require("express");
const router = express.Router();

const orderController = require("../controller/admin.controller");
const authenticate = require("../middlewares/admin.middleware");

router.get("/", authenticate, orderController.getOrders);
router.put('/:orderId/confirmed', authenticate, orderController.confirmedOrders);
router.put('/:orderId/ship', authenticate, orderController.shipOrders);
router.put('/:orderId/deliver', authenticate, orderController.deliverOrders);
router.put('/:orderId/cancel', authenticate, orderController.cancelledOrders);
router.put('/:orderId/delete', authenticate, orderController.deleteOrders);

module.exports = router