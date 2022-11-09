
const Order = require("../models/Order");
const User = require("../models/User");

//Add New Order
exports.addOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            orderUser : req.body.orderUser,
            product : req.body.product
        })
        await newOrder.save();
        res.status(200).send({msg : "Add New Order Success",newOrder})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the Order" }] });
  }
}

//Get All Order
exports.getOrder = async (req, res) => {
    try {
        const allOrder = await Order.find().populate('orderUser', 'firstName', User)
        res.status(200).send({msg : "Get All Order Success",Orders : allOrder})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get Order" }] });
  }
}

//update Order
exports.updateOrder = async( req, res )=>{
    try {
        const result = await Order.updateOne({_id : req.params.id}, {$set : req.body})
        if(!result.nModified){
            res.status(400).send({msg : "Order Already Updated !!!", error})
            return;
        }
        res.status(200).send({msg : 'Order is Updated ...', result})
    } catch (error) {
        res.status(400).send({msg : "Can Not Updated Order with this id !!!", error})
    }
}
