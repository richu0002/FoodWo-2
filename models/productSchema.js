const mongoose = require('mongoose');
const moment = require('moment');
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productSold: {
        type: Number,
        required: true
    },
    productInStock: {
        type: Number,
        required: true
    },
    productImages: {
        type: Array,
        required: true
    },
    purchaseCount: {
        type: Number,
        required: true
    },
    created_at: { type: String, default: () => { return moment(new Date()).format('DD/MM/YYYY') } }
}, { timestamps: true })

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;