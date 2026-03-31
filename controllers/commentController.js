const Product = require("../models/Product")
const Comment = require("../models/Comment")

const getAllCommentById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    res.render("./comments/new.ejs", { product })
  } catch (error) {
    res.status(404).json({
      message: "⚠️ Error showing New comment Page!",
      error: error.message,
    })
  }
}

const createComment = async (req, res) => {
  try {
    await Comment.create(req.body)
    res.redirect(`/products/${req.body.product}`)
  } catch (error) {
    res
      .status(500)
      .json({ message: "⚠️ Error creating comment!", error: error.message })
  }
}

module.exports = {
  getAllCommentById,
  createComment,
}
