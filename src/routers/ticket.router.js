const express = require("express");
const ticketRouter = express.Router();
const {
  getUserByTicket,
  getListTicket,
} = require("../controller/ticket.controller");

ticketRouter.get("/user-by-ticket/:id", getUserByTicket);
ticketRouter.get("/getListTicket", getListTicket);

module.exports = {
  ticketRouter,
};
