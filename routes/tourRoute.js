const express = require("express");
const tourController = require("./../controllers/tourController");
const tourRoute = express.Router();

tourRoute
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.addTour);
tourRoute
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRoute;
