const UserModel = require("../models/user");

//Find all users
exports.getUsers = async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: " Error retrieving to fetch the data" });
  }
};

//Add a new user

exports.addUser = async (req, res) => {
  try {
    const { name, age } = req.body;

    const newUser = new UserModel({ name, age });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error adding user", error: err.message });
  }
};
