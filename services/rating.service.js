const Rating = require("../models/rating.model")
const productService = require("./product.service")

async function createRating(reqData, user) {
    const product = await productService.findProductById(req.productId)

    const rating = new Rating({
        user: user._id,
        rating: req.rating,
        product: product._id,
        createdAt: new Date()
    })

    return await rating.save()
}

async function getProductRating(productId) {
    return await Rating.find({product: productId})
}

module.exports = {
    createRating,
    getProductRating
}