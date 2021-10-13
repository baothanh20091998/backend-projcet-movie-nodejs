const { cinema, cinema_movie, showtime, seat, Movie } = require("../models");

const getListCinema = async (req, res) => {
  try {
    const listCinema = await cinema.findAll({
      include: {
        model: cinema_movie,
        include: {
          model: showtime,
        },
        include: Movie,
      },
    });
    res.status(200).send(listCinema);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const getCinemaDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const cinemaDetail = await cinema.findOne({
      where: { id },
      include: {
        model: cinema_movie,
        include: {
          model: showtime,
        },
        include: Movie,
      },
    });
    res.status(200).send(cinemaDetail);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const editCinema = async (req, res) => {
  try {
    const { file } = req;
    const { id } = req.params;
    const { name, address } = req.body;
    const urlLogo = `http://localhost:9000/${file.path}`;
    await cinema.update(
      {
        name,
        address,
        image: urlLogo,
      },
      {
        where: { id },
      }
    );
    res.send("Update thanh cong");
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const createCinema = async (req, res) => {
  try {
    const { file } = req;
    const { name, address, cineplexid } = req.body;
    const urlLogo = `http:/localhost:9000/${file.path}`;
    const newCinema = await cinema.create({
      name,
      address,
      cineplexid,
      image: urlLogo,
    });
    res.status(200).send(newCinema);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const deleteCinema = async (req, res) => {
  try {
    const { id } = req.params;
    await cinema.destroy({
      where: {
        id,
      },
    });
    res.status(202).send("Xoa thanh cong");
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  getListCinema,
  getCinemaDetail,
  editCinema,
  createCinema,
  deleteCinema,
};
