const express=require("express")
const authRoutes=express.Router()
const authController=require("../Contoller/auth.controller.js")

authRoutes.post("/register",authController.register)
authRoutes.post("/login",authController.Login)

module.exports=authRoutes