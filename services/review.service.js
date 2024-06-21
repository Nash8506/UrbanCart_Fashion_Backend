const Review = require("../models/review")
const productService = require("./product.service")

async function createReview(reqData, user) {
    const product = await productService.findProductById(reqData.productId)

    const review = new Review({
        user: user._id,
        review: reqData.review,
        product: product._id,
        createdAt: new Date()
    })

    await product.save()
    return await review.save()
}

async function getAllReview(productId){
    const product = await productService.findProductById(reqData.productId)
    return await Review.find({product: productId}).populate("user")
}

module.exports = {
    createReview,
    getAllReview
}