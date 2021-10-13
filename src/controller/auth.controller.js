const bcryptjs = require("bcryptjs");
const { User } = require("../models");
const { generateToken } = require("../utils/token.utils");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    /**
     * các bước xác thực :
     *      1/ tìm user theo cái email
     *      2/ kiểm tra password
     */
    const userSignIn = await User.findOne({
      where: {
        email,
      },
    });
    if (userSignIn) {
      const isCheckPassword = bcryptjs.compareSync(
        password,
        userSignIn.password
      );
      if (isCheckPassword) {
        // tạo token
        // const payload = {
        //   id: userSignIn.id,
        //   email: userSignIn.email,
        //   role: userSignIn.role,
        // };
        // const secretKey = "node-js-sang-01";
        // const token = jwt.sign(payload, secretKey);
        const token = generateToken(
          userSignIn.id,
          userSignIn.email,
          userSignIn.role
        );
        res.status(200).send({
          message: "Đăng nhập thành công",
          token,
        });
      } else {
        res.status(400).send({
          message: "Mật Khẩu ko chính xác",
        });
      }
    } else {
      res.status(404).send({
        message: "không tìm thấy email phù hợp",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const userEmail = await User.findOne({
      where: {
        email,
      },
    });

    if (userEmail) {
      res.status(401).send({
        message: "Email da ton tai",
      });
    } else {
      const salt = bcryptjs.genSaltSync(10);
      const hashpassword = bcryptjs.hashSync(password, salt);
      const newUser = await User.create({
        name,
        email,
        password: hashpassword,
        phone,
        role: "CLIENT",
      });
      res.status(201).send(newUser);
    }
  } catch (error) {
    res.status(500).send({
      message: "Loi server",
      error,
    });
  }
};

module.exports = {
  signIn,
  signUp,
};
