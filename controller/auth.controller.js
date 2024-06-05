const userServices = require("../services/user.services")
const jwtProvider = require("../../config/jwtProvider")
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service")

const register = async (req, res) => {
    try {

        const result = await userServices.createUser(req.body);

        const { user, token } = result;

        await cartService.createCart(user);
        res.cookie("token", token);

        return res.status(200).send({ token, message: "Registered successfully" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const login=async (req, res) => {
    try {
        console.log('Login request body:', req.body); // Debugging log
        const user = await userServices.getUserByEmail(req.body.email)
        if(!user){
            return res.status(404).send({message: `invalid credentials. User not found with email ${email}`})
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordMatch){
            return res.status(401).send({message: "invalid password"})
        }

        const jwt = jwtProvider.generateToken(user)
        res.cookie("token", jwt)
        return res.status(200).send({jwt,message: "logged in successfully"})

    } catch (error) {
        console.error('Error during login:', error); // Debugging log
        return res.status(500).send({error: error.message})
    }
}

module.exports = {register, login}