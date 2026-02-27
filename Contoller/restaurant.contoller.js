const Restrauant = require("../model/Restrauant")


const createRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restrauant.create({
            ...req.body,
            ownerId: req.user.id
        })
        res.status(201).json({
            success: true,
            data: restaurant
        })
    } catch (error) {
        next(error)
    }
}

const getRestaurants = async (req, res, next) => {
    try {
        const restaurant = await Restrauant.find({ isOpen: true })
        res.json({
            success: true,
            data: restaurant
        })
    } catch (error) {
        next(error)
    }
}

module.exports={createRestaurant,getRestaurants}