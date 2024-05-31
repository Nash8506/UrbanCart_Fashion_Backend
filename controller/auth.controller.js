const userServices = require("../services/user.services")
const jwtProvider = require("../config/jwtProvider")
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service")

const register = async (req, res) => {
    try {
        const user = await userServices.createUser(req.body)
        const jwt = jwtProvider.generateToken(user._id)

        await cartService.createCart(user)

        return res.status(200).send({jwt,message: "registered successfully"})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

const login=async (req, res) => {
    try {
        const user = await userServices.findUserByEmail(req.body.email)
        if(!user){
            return res.status(404).send({message: `invalid credentials. User not found with email ${email}`})
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch){
            return res.status(401).send({message: "invalid password"})
        }
        const jwt = jwtProvider.generateToken(user._id)

        return res.status(200).send({jwt,message: "logged in successfully"})

    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

module.exports = {register, login}