const express = require("express")
const router = express.Router()

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

module.exports = router
