const Car = require("../models/Car")

const newCar = (req, res) => {
  res.render("cars/new.ejs")
}

const createCar = async (req, res) => {
  req.body.isAvailable = req.body.isAvailable === "on"
  await Car.create(req.body)
  res.redirect("/cars")
}

const indexCars = async (req, res) => {
  const cars = await Car.find()
  res.render("cars/index.ejs", { cars })
}

const showCar = async (req, res) => {
  const car = await Car.findById(req.params.id)
  res.render("cars/show.ejs", { car })
}

const deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id)
  res.redirect("/cars")
}

const editCar = async (req, res) => {
  const car = await Car.findById(req.params.id)
  res.render("cars/edit.ejs", { car })
}

const updateCar = async (req, res) => {
  req.body.isAvailable = req.body.isAvailable === "on"
  await Car.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/cars/${req.params.id}`)
}

module.exports = {
  newCar,
  createCar,
  indexCars,
  showCar,
  deleteCar,
  editCar,
  updateCar,
}
