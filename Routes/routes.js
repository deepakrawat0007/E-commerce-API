const router = require("express").Router()
const Product = require("../Modal/ECommModal");

//get all products

router.get("/products" , async(req , res)=>{
    try {
        const products = await Product.find()
        return res.status(200).json({
            "Product":products
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
} )

//get by specific Id
router.get("/products/:id" , async(req , res)=>{
    try {
        const id = req.params.id
        const product = await Product.findOne({id:id})

        if(!product){
            return res.status(400).json({
                message:"No Product Found With Given Id"
            })
        }
        return res.status(200).json({
            "Product":product
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
} )

//create New Product

router.post("/products" , async(req , res)=>{
    try {
        const {id , name , description , price , category} = req.body

        const product = new Product({
            id:id,
            name:name,
            description:description,
            price:price,
            category:category
        })
        const response = await product.save()
        return res.status(200).json({
            message:"Added Success",
            product:response
        })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
} )

//Update the product

router.put("/products/:id" , async(req , res)=>{
    try {
        const id = req.params.id

        const product = await Product.findOne({id:id})
        if(!product){
            return res.status(400).json({
                message:"No Product with Found Given Id"
            })
        }
        const _id = product._id
        const UpdatedProduct = await Product.findByIdAndUpdate(_id,req.body,
            {
            new: true,
            useFindAndModity: false
          })
          return res.status(200).json({
            message:"Updated Success",
            UpdatedProduct:UpdatedProduct
          })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
} )

//delete the product
 
router.delete("/products/:id" , async(req , res)=>{
    try {
        const id = req.params.id

        const product = await Product.findOne({id:id})
        if(!product){
            return res.status(400).json({
                message:"No Product with Found Given Id"
            })
        }
        const _id = product._id
        await Product.findByIdAndDelete(_id)
          return res.status(200).json({
            message:"Deleted Success",
          })

    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
} )

module.exports = router