
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type : String,
        required : true
    },
    productPrice:{
        type : Number,
        required : true
    },
    productQty:{
        type : Number,
        required : true
    },
    productImage:{
        type : String,
        required : true
    },
    like:{
        type : Number,
        default : 0
    },
    productDesc: String,
    productCategory:{
        type : ObjectId,
        ref : "Category",
        required : true
    }
})

module.exports = Product = model("product", productSchema);