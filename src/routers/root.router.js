const express = require("express");
const { authRouter } = require("./auth.router");
const { bookingRouter } = require("./booking.router");
const { cinemaRoute } = require("./cinema.router");
const { cinemaMovieRouter } = require("./cinema_movie.router");
const { cineplexRouter } = require("./cineplex.router");
const { seatRouter } = require("./seat.router");
const { showtimeRouter } = require("./showtime.router");
const { ticketRouter } = require("./ticket.router");
const { userRouter } = require("./user.router");

const rootRouter = express.Router();
rootRouter.use(userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/ticket", ticketRouter);
rootRouter.use("/cineplex", cineplexRouter);
rootRouter.use("/cinema", cinemaRoute);
rootRouter.use("/cinemaMovie", cinemaMovieRouter);
rootRouter.use("/showtime", showtimeRouter);
rootRouter.use("/seat", seatRouter);
rootRouter.use("/booking", bookingRouter);

module.exports = {
  rootRouter,
};
