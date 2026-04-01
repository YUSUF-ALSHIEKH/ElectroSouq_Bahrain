const mongoose = require("mongoose")
const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const connect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI)
    mongoose.connection.on("connected", () => {
      console.log("🫙  Successfully connected to MongoDB . . .")
    })
  } catch (error) {
    console.log("⚠️ Error connecting to MongoDB . . . ")
    console.log(error)
  }
}
connect()

module.exports = mongoose
