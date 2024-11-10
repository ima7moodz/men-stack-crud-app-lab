const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  isAvailable: Boolean,
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car
