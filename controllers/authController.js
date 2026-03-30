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

    await User.create({ ...req.body, password: hashedPass })

    res.render("./auth/thanks.ejs")
  } catch (error) {
    console.error("⚠️ An error has occurred registering a user!", error.message)
  }
}

const signInUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.send(
        "No user has been registered with that email. Please sign up!"
      )
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
      return res.send("Incorrect password! Please try again.")
    }

    req.session.user = { email: user.email, _id: user._id }
    req.session.save(() => {
      res.render(`./products/home.ejs`)
    })
  } catch (error) {
    console.error("⚠️ An error has occurred signing in a user!", error.message)
  }
}
const signOutUser = (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect("/")
    })
  } catch (error) {
    console.error("⚠️ An error has occurred signing out a user!", error.message)
  }
}

module.exports = {
  registerUser,
  signInUser,
  signOutUser,
}
