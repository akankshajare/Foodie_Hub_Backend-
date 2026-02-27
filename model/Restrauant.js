const mongoose=require("mongoose")

const restaruantSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    isOpen:{
        type:Boolean,
        default:true
    },
    image:{
        type:String,
    },
    ownerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    loaction:{
        type:String,
        required:true
    }

},
{timestamps:true}
)
module.exports=mongoose.model("Restaurant",restaruantSchema)