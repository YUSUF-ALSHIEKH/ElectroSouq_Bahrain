require("dotenv").config({ quiet: true })
const express = require("express")
const morgan = require("morgan")

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const db = require("./db")
const PORT = 3000

const app = express()
app.use(express.json())
app.use(morgan("dev"))

app.use("/", (req, res) => {
  res.send("hello world")
})

app.listen(PORT, () => {
  console.log("💻 server is cooking . . . .")
})
