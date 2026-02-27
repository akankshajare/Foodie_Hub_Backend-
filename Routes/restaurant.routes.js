const express=require("express")
const restaurantRoutes=express.Router()
const {createRestaurant,getRestaurants}=require('../Contoller/restaurant.contoller.js')
const authMiddleware = require("../Middleware/auth.middleware.js")
const roleMiddleware = require("../Middleware/role.middleware.js")

restaurantRoutes.post("/",authMiddleware,roleMiddleware("ADMIN"),createRestaurant)
restaurantRoutes.get("/",getRestaurants)

module.exports=restaurantRoutes
