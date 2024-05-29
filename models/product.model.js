const mongoose = require("mongoose");

const productSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
    },
    discountedPercent: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    brand: {
        type: String,
    },
    color: {
        type: string,
    },
    sizes:[ {
        name: {type: String},
        quantity: {type: Number}
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    imageUrl: [{
        type: String,
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
    }],
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
    },
    numberRatings: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Product = mongoose.model("products", productSchema);
module.exports = Product