const createUser = async (userData) => {
    try {
        let{firstName, lastName, email, password} = userData
        const isUserExist = await User.findOne({email})
    } catch (error) {
        throw error
    }
}