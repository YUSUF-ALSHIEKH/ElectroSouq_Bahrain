const Product = require("../models/Product.js")
const Comment = require("../models/Comment")
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
    const comments = await Comment.find({ product: req.params.id }).populate(
      "author"
    )
    res.render("./products/show.ejs", { product, comments })
  } catch (error) {
    console.error("⚠️ An error has occurred getting a product!", error.message)
  }
}
const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
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

const deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.render("./products/confirmDelete.ejs")
  } catch (error) {
    console.error("⚠️ An error has occurred deleting a product!", error.message)
  }
}
const getMobileProducts = async (req, res) => {
  try {
    const products = await Product.find({ category: "Mobile & Tablets" })
    res.render("./products/mobile.ejs", { products })
  } catch (error) {
    console.error("Error fetching mobile products:", error.message)
    res.status(500).send("Internal Server Error")
  }
}
const getConsolesProducts = async (req, res) => {
  try {
    const products = await Product.find({ category: "Consoles" })
    res.render("./products/console.ejs", { products })
  } catch (error) {
    console.error("Error fetching mobile products:", error.message)
    res.status(500).send("Internal Server Error")
  }
}
const getPcsProducts = async (req, res) => {
  try {
    const products = await Product.find({ category: "Pcs & Laptops" })
    res.render("./products/pc.ejs", { products })
  } catch (error) {
    console.error("Error fetching mobile products:", error.message)
    res.status(500).send("Internal Server Error")
  }
}
module.exports = {
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getMobileProducts,
  getConsolesProducts,
  getPcsProducts,
}
