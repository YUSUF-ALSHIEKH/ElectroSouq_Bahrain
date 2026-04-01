const Comment = require("../models/Comment")

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
  createComment,
}
