const express=require("express");
const router=express.Router();
const userController=require("../controller/user.controller");
const authenticateUser=require("../middlewares/user.middleware");

router.get("/profile",   userController.getUserProfile);
router.get("/all", userController.getAllUsers);

module.exports=router