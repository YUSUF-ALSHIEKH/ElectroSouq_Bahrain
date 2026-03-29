const bcrypt = require("bcrypt")
const User = require("../models/User")

const registerUser = async (req, res) => {
  try {
    const userData = await User.exists({ email: req.body.email })
    if (userData) {
      return res.send("username already taken")
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res.send("Password and Confirm Password must match")
    }
    const hashedPass = await bcrypt.hash(req.body.password, 12)

    await User.create({ ...req.body, password: hashedPassword })

    res.render("./auth/thanks.ejs")
  } catch (error) {
    console.error("⚠️ An error has occurred registering a user!", error.message)
  }
}

module.exports = {
  registerUser,
}
