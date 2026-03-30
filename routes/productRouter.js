const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

router.post("/", productController.createProduct)
router.get("/new", (req, res) => {
  res.render("./products/new.ejs")
})
router.post("/", productController.createProduct)
router.get("/:id", productController.getProductById)
router.get("/home", (req, res) => {
  res.render("./products/home.ejs")
})

module.exports = router
