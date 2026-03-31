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
const updateProductById = async (req, res) => {
  try {
    const product = await product.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: true,
    })

    res.redirect(`/products/${product._id}`)
  } catch (error) {
    console.error(
      ":warning: An error has occurred updating a product!",
      error.message
    )
  }
}
const getEditForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.render("products/edit.ejs", { product })
  } catch (error) {}
}

const deleteProductById = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id)
    res.render("./users/profile.ejs")
  } catch (error) {
    console.error(
      ":warning: An error has occurred deleting a product!",
      error.message
    )
  }
}
module.exports = {
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getEditForm,
}
