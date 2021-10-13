const express = require("express");
const {
  getListSeat,
  getSeatDetail,
  createSeat,
  deleteSeat,
  editSeat,
} = require("../controller/seat.controller");
const {
  authenticate,
  authorize,
} = require("../middleware/auth/verify-token.middleware");
const {
  checkExist,
} = require("../middleware/vaidation/check-exist.middleware");
const seatRouter = express.Router();
const { seat } = require("../models");

seatRouter.put(
  "/editSeat/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(seat),
  editSeat
);
seatRouter.delete(
  "/deleteSeat/:id",
  authenticate,
  authorize("ADMIN"),
  checkExist(seat),
  deleteSeat
);
seatRouter.post("/createSeat", authenticate, authorize("ADMIN"), createSeat);
seatRouter.get("/getSeatDetail/:id", checkExist(seat), getSeatDetail);
seatRouter.get("/getListSeat", getListSeat);

module.exports = {
  seatRouter,
};
