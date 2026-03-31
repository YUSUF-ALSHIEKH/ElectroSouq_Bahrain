const User = require("../models/User.js")
const Product = require("../models/Product.js")

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.redirect(`/products/${product._id}`)
  } catch (error) {
    console.error("⚠️ An error has occurred creating a product!", error.message)
  }
}
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.render("./products/show.ejs", { product })
  } catch (error) {
    console.error("⚠️ An error has occurred getting a product!", error.message)
  }
}
module.exports = {
  createProduct,
  getProductById,
}
