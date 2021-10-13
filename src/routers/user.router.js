const express = require("express");
const { User } = require("../models");

const {
  findAll,
  findDetail,
  create,
  remove,
  edit,
  uploadAvatar,
  resetPassword,
  getMovieByUser,
} = require("../controller/user.controller");

const { logUser } = require("../middleware/log/logs-users.middleware");
const {
  checkExist,
} = require("../middleware/vaidation/check-exist.middleware");
const {
  authenticate,
  authorize,
} = require("../middleware/auth/verify-token.middleware");
const {
  uploadImage,
} = require("../middleware/upload/upload-image.miiddlewares");

/**
 * Tạo api quản lý người dùng
 * 1/ lấy danh sánh người dùng (get - http://localhost:9000/users)
 * 2/ lấy chi tiết người dùng (get - http://localhost:9000/users/id)
 * 3/ tạo người dùng (post - http://localhost:9000/users)
 * 4/ cập nhật người dùng (put - http://localhost:9000/users/id)
 * 5/ xóa người dùng (delete - http://localhost:9000/users/id)
 */

const userRouter = express.Router();

userRouter.get("/users/get-movie-by-user/:id", getMovieByUser);

userRouter.get("/users", logUser, findAll);

userRouter.post(
  "/users/upload-avatar",
  authenticate,
  uploadImage("avatar"),
  uploadAvatar
);

userRouter.get("/users/:id", checkExist(User), findDetail);

userRouter.post("/users", create);

userRouter.put("/users/:id", checkExist(User), edit);

userRouter.delete(
  "/users/:id",
  authenticate,
  authorize("ADMIN", "SUPER_ADMIN"),
  checkExist(User),
  remove
);

userRouter.put("/users/reset-pass/:id", resetPassword);

module.exports = {
  userRouter,
};
