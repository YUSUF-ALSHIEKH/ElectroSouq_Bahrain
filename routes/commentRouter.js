const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment")
const commentController = require("../controllers/commentController")
const Product = require("../models/Product")

router.post("/", commentController.createComment)

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id)
  const comments = await Comment.find({ product: req.params.id })
  res.render("./comments/new.ejs", { comments: comments, product: product })
})
module.exports = router
