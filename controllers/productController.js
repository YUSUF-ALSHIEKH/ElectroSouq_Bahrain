const Product = require("../models/Product.js")

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.redirect(`/`)
  } catch (error) {
    console.error("⚠️ An error has occurred creating a product!", error.message)
  }
}

module.exports = {
  createProduct,
}
