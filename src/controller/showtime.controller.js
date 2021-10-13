const { showtime, seat } = require("../models");

const getListShowtime = async (req, res) => {
  try {
    const listShowtime = await showtime.findAll({
      include: {
        model: seat,
      },
    });
    res.status(200).send(listShowtime);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const getShowtimeDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const showtimeDetail = await showtime.findOne({
      where: { id },
      include: seat,
    });
    res.status(200).send(showtimeDetail);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const editShowtime = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await showtime.update(data, { where: { id } });
    res.status(200).send("Sua thanh cong");
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const createShowTime = async (req, res) => {
  try {
    const data = req.body;
    const newShowtime = await showtime.create(data);
    res.status(200).send(newShowtime);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const deleteShowtime = async (req, res) => {
  try {
    const { id } = req.params;
    await showtime.destroy({ where: { id } });
    res.status(200).send("Xoa thanh cong");
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  getListShowtime,
  getShowtimeDetail,
  editShowtime,
  createShowTime,
  deleteShowtime,
};
