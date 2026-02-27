const express=require("express")
const orderRoutes=express.Router()
const {createOrder,updateOrder, getOrder}=require("../Contoller/order.contoller")
const authMiddleware = require("../Middleware/auth.middleware")
const roleMiddleware = require("../Middleware/role.middleware")

orderRoutes.post("/",authMiddleware,roleMiddleware("USER"),createOrder)
orderRoutes.get("/",authMiddleware,roleMiddleware("USER"),getOrder)
orderRoutes.get("/admin",authMiddleware,roleMiddleware("ADMIN"),getOrder)
orderRoutes.patch("/:orderId/status",authMiddleware,roleMiddleware("ADMIN"),updateOrder)

module.exports=orderRoutes