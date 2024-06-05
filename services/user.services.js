const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwtProvider = require("../../config/jwtProvider")

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error(`User already exists with email ${email}`);
        }

        password = await bcrypt.hash(password, 10);

        const newUser = await User.create({ firstName, lastName, email, password });

        console.log(`created user ${newUser}`);

        const token = jwtProvider.generateToken(newUser);
        console.log(`Generated token ${token}`);
        return {user :newUser, token};

    } catch (error) {
        throw new Error(error.message);
    }
};

const findUserById = async (userId) => {
    try {
        const foundUser = await User.findById(userId)
        // .populate("address")

        if(!foundUser){
            throw new Error(`User not found with id ${userId}`)
        }
        return foundUser
    } catch (error) {
        throw new Error(error.message)
    }
}

const getUserByEmail = async (email) => {
    try {
        const foundUser = await User.findOne({email})

        if(!foundUser){
            throw new Error(`User not found with email ${email}`)
        }
        return foundUser
    } catch (error) {
        throw new Error(error.message)
    }
}

const getUserProfileByToken = async (token) => {
    try {

        const data=jwtProvider.getUserIdFromToken(token)
        // const foundUser = await findUserById(userId) 

        // if(!foundUser){
        //     throw new Error(`User not found with id ${userId}`)
        // }
        // return foundUser
            console.log('userId:', data); // Debugging log
    } catch (error) {
        throw new Error(error.message)
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find()
        return users;

    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers}