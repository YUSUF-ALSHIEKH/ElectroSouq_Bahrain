const User = require("../models/User")
const Comment = require("../models/Comment")

const getAllComment = async (req, res) => {
  try {
    const comment = await Comment.find({}).populate("user").populate("product")
  } catch (error) {}
}

module.exports = {
  getAllComment,
}
