const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

router.get("/new", (req, res) => {
  res.render("./products/new.ejs")
})
router.post("/", productController.createProduct)

module.exports = router
