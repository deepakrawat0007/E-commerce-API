const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    id: { type: Number, unique:true ,required:true},
    name: { type: String, required: true },
    description: { type: String, required:true },
    price: { type: Number,float:true, required: true },
    category: { type: String, required: true },
},{timestamps:true});

const Products = mongoose.model("Productss" , ProductSchema);

module.exports = Products;