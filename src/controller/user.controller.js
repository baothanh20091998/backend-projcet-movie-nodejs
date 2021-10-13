const { User, Ticket, Movie, seat } = require("../models");
const bcryptjs = require("bcryptjs");
const { sequelize } = require("../models");

const findAll = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const findDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      include: [
        {
          model: Ticket,
          include: seat,
        },
      ],
    });
    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    /** mã hóa password
     * 1/ tạo 1 chuỗi ngẫu nhiên (salt)
     * 2/ mã hóa password + salt
     * */
    const salt = bcryptjs.genSaltSync(10);
    const hashpassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
      phone,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi Server",
      error,
    });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await User.update(data, {
      where: { id },
    });
    res.send("Thành công");
  } catch (error) {
    res.status(500).send({
      message: "Lỗi server",
      error,
    });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { detailInfo } = req;
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(201).send(detailInfo);
  } catch (error) {
    res.status(500).send({
      message: "Lỗi server",
      error,
    });
  }
};

const uploadAvatar = async (req, res) => {
  try {
    const { file, user } = req;
    const urlImage = `http:/localhost:9000/${file.path}`;
    const userUploadAvatar = await User.findByPk(user.id);
    userUploadAvatar.avatar = urlImage;
    await userUploadAvatar.save();
    res.status(200).send(userUploadAvatar);
  } catch (error) {
    res.status(500).send({
      message: "Khong thanh cong",
      error,
    });
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDetail = User.findByPk(id);
    const { password } = req.body;
    const resetPassword = { ...userDetail, password: password };
    await User.update(resetPassword, {
      where: { id },
    });
    res.status(200).send({
      message: "Thanh cong",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieByUser = async (req, res) => {
  const { id } = req.params;
  const queryString = `
    select movies.name as movieName, users.name as userName from movies
    inner join tickets
    on movies.id = tickets.movieId
    inner join users
    on users.id = tickets.userId
    where users.id=${id}
  `;
  const [results] = await sequelize.query(queryString);
  res.send(results);
};

module.exports = {
  findAll,
  findDetail,
  create,
  edit,
  remove,
  uploadAvatar,
  resetPassword,
  getMovieByUser,
};
