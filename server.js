require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const morgan = require("morgan")

const carRoute = require("./routes/cars")

const app = express()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(morgan("dev"))
app.use(carRoute)

app.listen(PORT, () => {
  console.log(`Server is running on Localhost: ${PORT}`)
})
