const jwt = require("jsonwebtoken");

const generateToken = (id, email, role) => {
  const payload = {
    id,
    email,
    role,
  };
  const secretKey = "node-js-sang-01";
  const token = jwt.sign(payload, secretKey, {
    expiresIn: 10 * 10 * 60, //giây
  });
  return token;
};

module.exports = {
  generateToken,
};
