const { Movie, cinema, cinema_movie, showtime, seat } = require("../models");

const getListCinemaMovie = async (req, res) => {
  try {
    const listCinema = await cinema_movie.findAll({
      include: {
        model: showtime,
        include: seat,
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

const getCinemaMovieDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const cinemaMovieDetail = await cinema_movie.findOne({
      where: { id },
      include: {
        model: showtime,
        include: seat,
      },
    });
    res.status(200).send(cinemaMovieDetail);
  } catch (error) {
    res.status(500).send({
      messgae: "Loi server",
      error,
    });
  }
};

const createCinemaMovie = async (req, res) => {
  try {
    const { cinemaid, movieid } = req.body;
    const checkCinema = await cinema.findOne({
      where: ({ id } = cinemaid),
    });
    const checkMovie = await Movie.findOne({
      where: ({ id } = movieid),
    });
    const checkMovieID = await cinema_movie.findOne({
      where: { movieid, cinemaid },
    });
    if (checkCinema && checkMovie) {
      if (checkMovieID) {
        res.status(400).send({
          message: "Phim da co trong rap nay",
        });
      } else {
        const newCinemaMovie = await cinema_movie.create({ cinemaid, movieid });
        res.status(201).send(newCinemaMovie);
      }
    } else {
      res.status(402).send({
        message: "Khong tim thay movie hoac cinema tuong ung",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const deleteCinemaMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await cinema_movie.destroy({
      where: { id },
    });
    res.status(200).send({
      message: "Xoa thanh cong",
    });
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const editCinemaMovie = async (req, res) => {
  try {
    const { cinemaid, movieid } = req.body;
    const checkCinema = await cinema.findOne({
      where: ({ id } = cinemaid),
    });
    const checkMovie = await Movie.findOne({
      where: ({ id } = movieid),
    });
    const checkMovieID = await cinema_movie.findOne({
      where: { movieid, cinemaid },
    });
    if (checkCinema && checkMovie) {
      if (checkMovieID) {
        res.status(400).send({
          message: "Phim da co trong rap nay",
        });
      } else {
        const { id } = req.params;
        await cinema_movie.update({ cinemaid, movieid }, { where: { id } });
        res.status(201).send("Thanh cong");
      }
    } else {
      res.status(402).send({
        message: "Khong tim thay movie hoac cinema tuong ung",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  getListCinemaMovie,
  getCinemaMovieDetail,
  createCinemaMovie,
  deleteCinemaMovie,
  editCinemaMovie,
};
