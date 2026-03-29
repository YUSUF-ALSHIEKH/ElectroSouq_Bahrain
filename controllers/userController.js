const User = require("../models/User")
const Product = require("../models/Product")

const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    res.send(user)
  } catch (error) {}
}

module.exports = {
  getUserByID,
}
