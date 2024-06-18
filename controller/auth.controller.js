const userServices = require("../services/user.service")
const jwtProvider = require("../../config/jwtProvider")
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service")

const register = async (req, res) => {
    try {

        const user = await userServices.createUser(req.body);
        const jwt=jwtProvider.generateToken(user.id);

        // await cartService.createCart(user);
        // res.cookie("token", token);

        return res.status(200).send({ jwt, message: "Registered successfully" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const login=async (req, res) => {
    const {password, email}=req.body
    try {
        // console.log('Login request body:', req.body); // Debugging log
        const user = await userServices.getUserByEmail(email)
        if(!user){
            return res.status(404).send({message: `invalid credentials. User not found with email ${email}`})
        }
        console.log('Password provided:', password); // Debugging log
        console.log('User password:', user.password); // Debugging log
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(401).send({message: "invalid password"})
        }

        const jwt = jwtProvider.generateToken(user._id)
        // res.cookie("token", jwt)
        return res.status(200).send({jwt,message: "logged in successfully"})

    } catch (error) {
        console.error('Error during login:', error); // Debugging log
        return res.status(500).send({error: error.message})
    }
}

module.exports = {register, login}