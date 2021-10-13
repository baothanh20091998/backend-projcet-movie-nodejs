const express = require("express");
const {
  getListCinemaMovie,
  getCinemaMovieDetail,
  createCinemaMovie,
  deleteCinemaMovie,
  editCinemaMovie,
} = require("../controller/cinema_movie.controller");
const {
  authenticate,
  authorize,
} = require("../middleware/auth/verify-token.middleware");
const { cinema_movie } = require("../models");
const {
  checkExist,
} = require("../middleware/vaidation/check-exist.middleware");

const cinemaMovieRouter = express.Router();

cinemaMovieRouter.put(
  "/editCinemaMovie/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(cinema_movie),
  editCinemaMovie
);
cinemaMovieRouter.delete(
  "/deleteCinemaMovie/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(cinema_movie),
  deleteCinemaMovie
);
cinemaMovieRouter.post(
  "/createCinemaMovie",
  authenticate,
  authorize("ADMIN"),
  createCinemaMovie
);
cinemaMovieRouter.get(
  "/getCinemaMovieDetail/:id",
  checkExist(cinema_movie),
  getCinemaMovieDetail
);
cinemaMovieRouter.get("/getListCinemaMovie", getListCinemaMovie);

module.exports = {
  cinemaMovieRouter,
};
