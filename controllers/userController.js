const User = require("../models/User")
const Product = require("../models/Product")

const getAllUSers = async (req, res) => {
  try {
    const user = await User.find({})
    res.send(user)
  } catch (error) {
    console.error("⚠️ An error has occurred finding a user!", error.message)
  }
}
const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    res.send(user)
  } catch (error) {}
}

module.exports = {
  getAllUSers,
  getUserByID,
}
