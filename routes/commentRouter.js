const express = require("express")
const router = express.Router()

const middleware = require("../middleware")

const commentController = require("../controllers/commentController")

router.post("/", commentController.createComment)

router.get("/:id", commentController.getAllCommentById)
module.exports = router
