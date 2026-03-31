const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

const productController = require("../controllers/productController")

router.get("/new", (req, res) => {
  res.render("./products/new.ejs")
})
router.get("/home", (req, res) => {
  res.render("./products/home.ejs")
})

router.get("/Pcs&Laptops", (req, res) => {
  res.render("./products/pc.ejs")
})
router.get("/console", (req, res) => {
  res.render("./products/console.ejs")
})
router.get("/mobile", (req, res) => {
  res.render("./products/mobile.ejs")
})
router.post("/", productController.createProduct)
router.get("/:id", productController.getProductById)
router.get("/:id/edit", productController.getEditForm)
router.put("/:id", productController.updateProductById)
router.delete("/:id", productController.deleteProductById)
router.get("/:id/edit", async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.render("./products/edit.ejs", { product })
})

module.exports = router
