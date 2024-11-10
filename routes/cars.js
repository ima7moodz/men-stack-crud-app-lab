const express = require("express")
const router = express.Router()
const carController = require("../controllers/cars")

router.get("/cars/new", carController.newCar)
router.post("/cars", carController.createCar)
router.get("/cars", carController.indexCars)
router.get("/cars/:id", carController.showCar)
router.delete("/cars/:id", carController.deleteCar)
router.get("/cars/:id/edit", carController.editCar)
router.put("/cars/:id", carController.updateCar)

module.exports = router
