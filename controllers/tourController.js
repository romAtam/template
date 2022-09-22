const Tour = require("./../models/tourModel");

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({ status: "success", results: tours.length, tours });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error });
  }
};
const addTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(200).json({ status: "success", tour });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error });
  }
};
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({ status: "success", tour });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error });
  }
};
const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "success", tour });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error });
  }
};
const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      await tour.delete();
    } else {
      throw new Error("Tour not found");
    }
    res
      .status(200)
      .json({ status: "success", message: "Tour successfully deleted" });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error.message });
  }
};
module.exports = {
  getTourById,
  getAllTours,
  addTour,
  deleteTour,
  updateTour,
};
