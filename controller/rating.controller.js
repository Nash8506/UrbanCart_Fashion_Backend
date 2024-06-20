const ratingService = require("../services/rating.service");

const createRating = async (req, res) => {
    const user = req.user
    try {
        const rating = await ratingService.createRating(req.body, req.user);
        return res.status(200).send(rating);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

const getAllRatings = async (req, res) => { 
    const productId = req.params.id
    const user = req.user
    try {
        const ratings = await ratingService.getAllRatings(productId);
        return res.status(200).send(ratings);
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

module.exports = {createRating, getAllRatings}