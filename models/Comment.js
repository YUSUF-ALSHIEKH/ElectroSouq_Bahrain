const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("comment", commentSchema)
