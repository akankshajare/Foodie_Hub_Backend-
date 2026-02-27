const express=require("express")
const { initialPayment, verifyPayment } = require("../Contoller/payment.controller")
const authMiddleware = require("../Middleware/auth.middleware")
const paymentRoutes=express.Router()

paymentRoutes.post("/initiate",authMiddleware,initialPayment)
paymentRoutes.post("/verify",authMiddleware,verifyPayment)

module.exports=paymentRoutes