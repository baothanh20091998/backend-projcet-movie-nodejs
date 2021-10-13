const logUser = (req, res, next) => {
  console.log("Lấy danh sách người dùng");
  next(); //chay, tới middleware hoặc controller tiếp theo
};

module.exports = {
  logUser,
};
