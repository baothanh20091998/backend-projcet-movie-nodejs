const express = require("express");
const {
  getListCinema,
  getCinemaDetail,
  editCinema,
  createCinema,
  deleteCinema,
} = require("../controller/cinema.controler");
const {
  authorize,
  authenticate,
} = require("../middleware/auth/verify-token.middleware");
const {
  uploadImage,
} = require("../middleware/upload/upload-image.miiddlewares");
const {
  checkExist,
} = require("../middleware/vaidation/check-exist.middleware");
const { cinema } = require("../models");

const cinemaRoute = express.Router();

cinemaRoute.delete(
  "/deleteCinema/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(cinema),
  deleteCinema
);
cinemaRoute.post(
  "/createCinema",
  authenticate,
  authorize("ADMIN"),
  uploadImage("cinema"),
  createCinema
);
cinemaRoute.put(
  "/editCinema/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(cinema),
  uploadImage("cinema"),
  editCinema
);
cinemaRoute.get("/getCinemaDetail/:id", checkExist(cinema), getCinemaDetail);
cinemaRoute.get("/getListCinema", getListCinema);

module.exports = {
  cinemaRoute,
};
