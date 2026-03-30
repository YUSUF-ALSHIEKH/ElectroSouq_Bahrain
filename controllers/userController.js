const User = require("../models/User")
const Product = require("../models/Product")

const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("products")
    const products = await Product.find({ author: user._id })
    const data = {
      _id: user._id,
      first: user.first,
      last: user.last,
      picture: user.picture,
      products: products,
    }

    res.render("./users/profile.ejs", { user })
  } catch (error) {}
}

module.exports = {
  getUserByID,
}
