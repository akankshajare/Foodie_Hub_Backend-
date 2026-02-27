const mongoose = require("mongoose")
const { ORDER_STATUS } = require("../utils/ordreStatusFlow")

const OrderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },
    items: [{
        menuItemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MenuItem",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        priceAtOrderTime: {
            type: Number,
            required: true,
        }

    }],
    totalAmount: {
        type: Number,
        required: true,
    },
    status:{
        type:String,
        enum:Object.values(ORDER_STATUS),
        default:ORDER_STATUS.PLACED
    },
    paymentStatus:{
        type:String,
        enum:["PAID","PENDING","FAILED"],
        default:"PENDING"
    }

},
{timestamps:true}
)
module.exports=mongoose.model("order",OrderSchema)