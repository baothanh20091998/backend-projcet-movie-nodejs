const { seat, Ticket, User, showtime } = require("../models");

const bookingTicket = async (req, res) => {
  try {
    const data = req.body;
    let listSeatBooking = [];
    let movieId = "";
    let idUser;
    const { user } = req;
    const listTicket = await Ticket.findAll();
    const idTicket = parseInt(listTicket.length) + 1;
    for (let index = 0; index < data.length; index++) {
      const detail = await seat.findOne({
        where: ({ id } = data[index]),
        include: {
          model: showtime,
        },
      });

      if (detail.status) {
        listSeatBooking.push(`Ghe ${detail.id} da duoc dat`);
      } else {
        movieId = detail.showtime.cinema_movieId;
        const { id } = user;
        const userDetail = await User.findOne({
          where: { id },
        });
        idUser = userDetail.id;
        detail.status = true;
        detail.ticketId = idTicket;
        detail.save();
        listSeatBooking.push(detail);
      }
    }
    if (movieId !== "") {
      await Ticket.create({
        listSeat: idTicket,
        userId: idUser,
        movieId,
      });
    }
    res.send(listSeatBooking);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  bookingTicket,
};
