const Product = require("../models/Product")
const Comment = require("../models/Comment")

const getAllCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
    res.render("./comments/new.ejs", { comment })
  } catch (error) {
    res.status(404).json({
      message: "⚠️ Error showing New comment Page!",
      error: error.message,
    })
  }
}

const createComment = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.redirect(`/comments/${product._id}`)
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
