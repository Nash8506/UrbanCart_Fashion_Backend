const createUser = async (userData) => {
    try {
        let{firstName, lastName, email, password} = userData
        const isUserExist = await User.findOne({email})

        if(isUserExist){
            throw new Error(`User already exist with email ${email}`)
        }

        password = await bcrypt.hash(password, 10)

        const user = await User.create({firstName, lastName, email, password})

        console.log(`created user ${user.email}`)

        return user

    } catch (error) {
        throw new Error(error.message)
    }
}

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)

        if(!user){
            throw new Error(`User not found with id ${userId}`)
        }
        return user
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {createUser}