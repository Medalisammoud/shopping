const Category = require("../models/Category");
const Product = require("../models/Product");
//const fs = require('fs');


//Add New Procuct
// exports.addProduct = async (req, res) => {
//     try {
//         console.log(req.body)
//         console.log(req.file)
//         const {productName , productPrice, productQty,productDesc,productCategory }=req.body;
        
//         const newProduct = new Product({productName , productPrice, productQty, productDesc, productCategory, productImage : req.file.path});
//         await newProduct.save();
//         res.status(200).send({msg : "Add New Product Success",newProduct})
//     } catch (error) {
//         console.log(error);
//     res.status(400).send({ errors: { msg: "can not save the Product" } });
//   }
// }
exports.addProduct = async (req, res) => {
    try {
        const {productName , productPrice, productQty,productDesc,productCategory, productImage }=req.body;
        
        const newProduct = new Product({productName , productPrice, productQty, productDesc, productCategory, productImage});
        await newProduct.save();
        res.status(200).send({msg : "Add New Product Success",newProduct})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: { msg: "can not save the Product" } });
  }
}

//Get Products
exports.getProduct = async (req, res) => {
    try {
        const result = await Product.find({}).populate('productCategory','categoryName',Category);
        res.status(200).send({msg : "Get All Product Success",products : result})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: { msg: "can not Get Products" } });
  }
}

//Get Product
exports.getOneProduct = async (req, res) => {
    try {
        const result = await Product.findOne({_id : req.params.id}).populate('productCategory','categoryName',Category);
        res.status(200).send({msg : "Get Product Success",product : result})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: { msg: "can not Get Product" } });
  }
}


//update Product withe Multer
// exports.updateProduct = async( req, res )=>{
//     try {
        
//         if(req.file.path)
//         {
//             const oldProduct = await Product.findById({_id : req.params.id});
//             fs.unlink(oldProduct.productImage, err => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log('Image successfully deleted from the filesystem');
//             });
//         }

//         req.body.productImage = req.file.path;
//         const result = await Product.updateOne({_id : req.params.id}, {$set : req.body})
//         if(!result.nModified){
//             res.status(400).send({msg : "Product Already Updated !!!", error})
//             return;
//         }
//         res.status(200).send({msg : 'Product is Updated ...', result})
//     } catch (error) {
//         res.status(400).send({msg : "Can Not Updated Product with this id !!!", error})
//     }
// }
exports.updateProduct = async( req, res )=>{
        try {
            const result = await Product.updateOne({_id : req.params.id}, {$set : req.body})
            if(!result.nModified){
                res.status(400).send({msg : "Product Already Updated !!!", error})
                return;
            }
            res.status(200).send({msg : 'Product is Updated ...', result})
        } catch (error) {
            res.status(400).send({msg : "Can Not Updated Product with this id !!!", error})
        }
    }

//Delete Product
exports.deleteProduct = async (req, res) =>{
    try {
        await Product.deleteOne({_id : req.params.id})
        res.status(200).send({msg : 'Product is Deleted ...'})
    } catch (error) {
        res.status(400).send({msg : "Can Not Deleted Product with this id !!!", error})
    }
}
