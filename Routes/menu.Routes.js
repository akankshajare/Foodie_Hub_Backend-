const express=require("express")
const authMiddleware=require("../Middleware/auth.middleware")
const roleMiddleware=require("../Middleware/role.middleware")
const { createMenuItem, getMenuItem } = require("../Contoller/menuItem.controller")
const menuRoutes=express.Router()

menuRoutes.post("/",authMiddleware,roleMiddleware("ADMIN"),createMenuItem)
menuRoutes.get("/restaurant/:restaurantId",getMenuItem)

module.exports=menuRoutes