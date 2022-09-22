const mongoose = require("mongoose");
const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 4.5,
  },
  summary: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "description must be provided"],
  },
  imageCover: {
    type: String,
    required: [true, "image cover must be provided"],
  },
  images: {
    type: [String],
  },
  startDates: {
    type: [Date],
    default: Date.now(),
  },

  duration: {
    type: Number,
  },
  maxGroupSize: {
    type: Number,
  },
  difficulty: {
    type: String,
  },
});
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
