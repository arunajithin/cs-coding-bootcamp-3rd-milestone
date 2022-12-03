const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        brand: {
            type:String,
            required: true,
        },
        sku:{
            type:String,
            required: true,
        },
        price: {
            type:Number,
            required: true,
        },
        category: {
            type:String,
            required: true,
        },
        origin: {
            type:String,
            required: false,
        },
        dietaryNeeds: {
            type:String,
            required: true,
        },
        storageReq: {
            type:String,
            required: true,
        },
        shelfLife: {
            type:Number,
            required: true,
        },
        quantity: {
            type:Number,
            required: true,
        }
    }
)

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;