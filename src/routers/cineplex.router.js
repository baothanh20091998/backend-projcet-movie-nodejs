const express = require("express");
const {
  authenticate,
  authorize,
} = require("../middleware/auth/verify-token.middleware");
const { cineplex } = require("../models");
const {
  getListCineplex,
  getCineplexDetailById,
  createCineplex,
  deleteCineplex,
  editCineplex,
} = require("../controller/cineplex.controller");
const {
  checkExist,
} = require("../middleware/vaidation/check-exist.middleware");
const {
  uploadImage,
} = require("../middleware/upload/upload-image.miiddlewares");

const cineplexRouter = express.Router();

cineplexRouter.put(
  "/editCineplex/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(cineplex),
  uploadImage("cineplex"),
  editCineplex
);

cineplexRouter.delete(
  "/deleteCineplex/:id",
  authenticate,
  authorize("ADMIN"),
  deleteCineplex
);

cineplexRouter.post(
  "/createCineplex",
  authenticate,
  authorize("ADMIN"),
  uploadImage("cineplex"),
  createCineplex
);

cineplexRouter.get("/getListCineplex", getListCineplex);

cineplexRouter.get(
  "/getCineplexDetail/:id",
  checkExist(cineplex),
  getCineplexDetailById
);

module.exports = {
  cineplexRouter,
};
