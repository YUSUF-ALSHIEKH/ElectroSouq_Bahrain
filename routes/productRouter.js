const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")

const productController = require("../controllers/productController")

router.get("/new", (req, res) => {
  res.render("./products/new.ejs")
})
router.get("/home", (req, res) => {
  res.render("./products/home.ejs")
})
router.get("/console", productController.getConsolesProducts)
router.get("/Pcs&Laptops", productController.getPcsProducts)

router.get("/mobile", productController.getMobileProducts)
router.post("/", productController.createProduct)
router.get("/:id", productController.getProductById)
router.put("/:id", productController.updateProductById)
router.delete("/:id", productController.deleteProductById)

router.get("/:id/edit", async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.render("./products/edit.ejs", { product })
})

module.exports = router
