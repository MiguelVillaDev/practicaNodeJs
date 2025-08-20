const User = require('../models/usersData')

const createUser = async (req, res) =>{
    const user = new User(req.body);

    try {
      await user.save()
      res.status(201).json(user);  
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }
}

const getUsers = async (req, res ) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}



module.exports = {getUsers, createUser};