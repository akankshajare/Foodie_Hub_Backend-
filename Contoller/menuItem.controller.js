
const Restrauant = require('../model/Restrauant');
const MenuItems = require('../model/MenuItem');

const createMenuItem = async (req, res, next) => {
try {
    const {name,price,restaurantId}=req.body
    const restaurant=await Restrauant.findById(restaurantId)
    if(!restaurant){
        throw new Error("Restaurant is not found");
    }
    if(restaurant.ownerID.toString()!==req.user.id){
        console.log(restaurant.ownerID.toString());
        console.log(req.user.id)
         throw new Error("Not authorize to add menu items");
    }
    const menuItem=await MenuItems.create({
        name,price,restaurantId
    })
    res.status(201).json({
        success:true,
        data:menuItem,
    })
} catch (error) {
    next(error)
}

}

const getMenuItem = async (req, res, next) => {
try {
    const {restaurantId}=req.params
    
    const menuItem=await MenuItems.find({
       restaurantId,
       isAvailable:true
    })
    res.status(200).json({
        success:true,
        data:menuItem,
    })
} catch (error) {
    next(error)
}
}

module.exports={createMenuItem,getMenuItem}
