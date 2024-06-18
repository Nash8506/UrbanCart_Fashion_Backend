const userServices = require("../services/user.service")

const getUserProfile = async (req, res) => {
    try {
        const jwt=req.headers.authorization?.split(" ")[1]

        if(!jwt){   
            return res.status(404).send({error: "token not found"})
        }

        const user = await userServices.getUserProfileByToken(jwt)
        // console.log('Found user:', user); // Debugging log
        return res.status(200).send(user)
        // console.log('User:', req.user); // Debugging log
    } 
    
    catch (error) {
        // console.error('Error getting user profile:', error);
        return res.status(500).send({error: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers()
        // console.log('All users:', users);
        return res.status(200).send(users)
    } 
    
    catch (error) {
        // console.error('Error getting all users:', error); // Debugging log
        return res.status(500).send({error: error.message})
    }
}

module.exports = {getUserProfile, getAllUsers}