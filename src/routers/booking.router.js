const express = require("express");
const { bookingTicket } = require("../controller/booking.controller");
const { authenticate } = require("../middleware/auth/verify-token.middleware");
const {
  checkExist,
} = require("../middleware/vaidation/check-exist.middleware");
const { seat } = require("../models");
const bookingRouter = express.Router();

bookingRouter.get("/bookingTicket", authenticate, bookingTicket);

module.exports = {
  bookingRouter,
};
