const express = require("express");
const userController = require("./../controllers/userController");
const userRoute = express.Router();
console.log(userController);
userRoute
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addUser);
userRoute
  .route("/:id")
  .get(userController.getUserById)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = userRoute;
