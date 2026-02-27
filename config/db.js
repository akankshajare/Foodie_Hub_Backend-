const mongoose=require("mongoose")
const MongoURI=process.env.MONGO_URI

const connectDB=async()=>{
    try {
        await mongoose.connect(MongoURI)
        console.log("mongoose connected succesfully")
    } catch (error) {
        console.log(error,": connection failed")
    }
}

connectDB()