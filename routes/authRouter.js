const express = require("express")
const router = express.Router()

const authController = require("../controllers/authController.js")

router.post("/sign-up", authController.registerUser)
router.get("/sign-out", authController.signOutUser)

router.get("/sign-up", (req, res) => {
  res.render("./auth/sign-up.ejs")
})

module.exports = router
