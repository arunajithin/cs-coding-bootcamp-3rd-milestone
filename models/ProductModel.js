const mongoose = require('mongoose');

//Schema
const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productSku: {
            type: String,
            required: true
        },
        productDescription: {
            type: String,
            required: false
        },
        productCategory: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
            required: true
        },
        brandName: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
);


//Model
const ProductModel = mongoose.model('products', ProductSchema);

// Export the model
module.exports = ProductModel;