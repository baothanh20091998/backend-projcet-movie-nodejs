const express = require("express");
const {
  getListShowtime,
  getShowtimeDetail,
  editShowtime,
  createShowTime,
  deleteShowtime,
} = require("../controller/showtime.controller");
const {
  authenticate,
  authorize,
} = require("../middleware/auth/verify-token.middleware");
const {
  checkExist,
} = require("../middleware/vaidation/check-exist.middleware");
const showtimeRouter = express.Router();
const { showtime } = require("../models");

showtimeRouter.delete(
  "/deleteShowtime/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(showtime),
  deleteShowtime
);
showtimeRouter.post(
  "/createShowtime",
  authenticate,
  authorize("ADMIN"),
  createShowTime
);
showtimeRouter.put(
  "/editShowTime/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(showtime),
  editShowtime
);
showtimeRouter.get(
  "/getShowtimeDetail/:id",
  checkExist(showtime),
  getShowtimeDetail
);
showtimeRouter.get("/getListShowtime", getListShowtime);

module.exports = {
  showtimeRouter,
};
