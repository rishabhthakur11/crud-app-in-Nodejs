const { findByIdAndDelete } = require("../model/user");
const User = require("../model/user");

exports.home = (req, res) => {
  res.send("Hello  Alpha ");
};

// create user route
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    // check if all the details are present
    if (!name || !email) {
      throw new Error("Name and Email are required");
    }
    // check if user existed or not
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      throw new Error("User is Existed");
    }
    // Insert into the database
    const user = await User.create({ name, email });
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// getUser from the database

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

// edit user
exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "User Updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
// delete the user

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
