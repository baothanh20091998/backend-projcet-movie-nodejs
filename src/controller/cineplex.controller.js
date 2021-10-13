const {
  cineplex,
  cinema,
  cinema_movie,
  showtime,
  Movie,
} = require("../models");

const getListCineplex = async (req, res) => {
  try {
    const cineplexList = await cineplex.findAll({
      include: {
        model: cinema,
        include: {
          model: cinema_movie,
          include: showtime,
          include: Movie,
        },
      },
    });
    res.status(200).send(cineplexList);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi server",
      error,
    });
  }
};

const getCineplexDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const cineplexDetailById = await cineplex.findOne({
      where: { id },
      include: {
        model: cinema,
        include: {
          model: cinema_movie,
          include: showtime,
          include: Movie,
        },
      },
    });
    res.status(200).send(cineplexDetailById);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const createCineplex = async (req, res) => {
  try {
    const { file } = req;
    const { name } = req.body;
    const urlLogo = `http://localhost:9000/${file.path}`;
    const newCineplex = await cineplex.create({
      name,
      logo: urlLogo,
    });
    res.status(201).send(newCineplex);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const deleteCineplex = async (req, res) => {
  try {
    const { id } = req.params;
    const cineplexDelete = await cineplex.findOne({
      where: {
        id,
      },
    });
    await cineplex.destroy({
      where: {
        id,
      },
    });
    res.status(201).send(cineplexDelete);
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

const editCineplex = async (req, res) => {
  try {
    const { file } = req;
    const { id } = req.params;
    const urlLogo = `http://localhost:9000/${file.path}`;
    const { name } = req.body;
    await cineplex.update(
      {
        name,
        logo: urlLogo,
      },
      {
        where: { id },
      }
    );
    res.send("Sua thanh cong");
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  getListCineplex,
  getCineplexDetailById,
  createCineplex,
  deleteCineplex,
  editCineplex,
};
