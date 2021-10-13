const { Ticket, User, seat } = require("../models");

const getUserByTicket = async (req, res) => {
  const { id } = req.params;
  const ticketDetail = await Ticket.findOne({
    where: {
      id,
    },
    include: [
      {
        model: User,
      },
    ],
  });
  res.send(ticketDetail);
};

const getListTicket = async (req, res) => {
  try {
    const listTicket = await Ticket.findAll({
      include: {
        model: seat,
      },
    });
    res.status(200).send(listTicket);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  getUserByTicket,
  getListTicket,
};
