const express=require("express")
const app=express()
const authRoutes=require("./Routes/auth.Routes.js")
const orderRoutes=require("./Routes/order.routes.js")
const paymentRoutes=require("./Routes/payment.routes.js")
const restaurantRoutes = require("./Routes/restaurant.routes.js")
const menuRoutes = require("./Routes/menu.Routes.js")
const rateLimit=require("express-rate-limit")
require("dotenv").config()
require("./config/db.js")
const cors=require('cors')

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `windowMs`
  standardHeaders: true, // Enable standard RateLimit headers
  legacyHeaders: false, // Disable legacy X-RateLimit-* headers
  message: 'Too many requests, please try again later.', // Message when limit is exceeded
});

// Apply the rate limiting middleware to all requests
app.use(apiLimiter);
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://foodiieehub.netlify.app"
    ],
    credentials:true
}))

app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("testing")
// })

app.use("/api/auth",authRoutes)
app.use("/api/restaurants",restaurantRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/payments",paymentRoutes)
app.use("/api/menuitems",menuRoutes)


//global error handling
app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(500).json({
        success:false,
        message:err.message || "server Error"
    })
})

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})