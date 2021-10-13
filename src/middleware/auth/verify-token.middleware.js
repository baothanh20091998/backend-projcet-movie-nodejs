const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("Token");
  try {
    const secretKey = "node-js-sang-01";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (error) {
    res.status(404).send({
      message: "Bạn chưa đăng nhập",
    });
  }
};

const authorize = (arrayRole) => (req, res, next) => {
  try {
    const { user } = req;
    if (arrayRole.includes(user.role)) {
      next();
    } else {
      res.status(403).send({
        message: "Bạn không có quyền đăng nhập",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  authenticate,
  authorize,
};
