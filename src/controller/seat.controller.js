const { seat } = require("../models");

const getListSeat = async (req, res) => {
  try {
    const listSeat = await seat.findAll();
    res.status(200).send(listSeat);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const getSeatDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const seatDetail = await seat.findOne({
      where: { id },
    });
    res.status(200).send(seatDetail);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const createSeat = async (req, res) => {
  try {
    const { showtimeId, name, price, type } = req.body;
    const checkSeat = await seat.findOne({
      where: { showtimeId, name },
    });
    if (checkSeat) {
      return res.status(400).send("Ghe da co trong rap nay");
    } else {
      const newSeat = await seat.create({
        showtimeId,
        name,
        price,
        type,
      });
      res.status(200).send(newSeat);
    }
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const deleteSeat = async (req, res) => {
  try {
    const { id } = req.params;
    await seat.destroy({
      where: { id },
    });
    res.status(200).send("Thanh cong");
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const editSeat = async (req, res) => {
  try {
    const { id } = req.params;
    const { showtimeId, name, price, type } = req.body;
    const seatDetail = await seat.findByPk(id);
    const checkSeat = await seat.findOne({
      where: { showtimeId, name },
    });
    if (!checkSeat || seatDetail.name === name) {
      await seat.update(
        {
          showtimeId,
          name,
          price,
          type,
        },
        {
          where: { id },
        }
      );
      res.status(200).send("Cap nhat thanh cong");
    } else {
      return res.status(400).send("Ghe da co trong rap nay");
    }
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  getListSeat,
  getSeatDetail,
  createSeat,
  deleteSeat,
  editSeat,
};
