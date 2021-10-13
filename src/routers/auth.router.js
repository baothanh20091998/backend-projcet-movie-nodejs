const express = require("express");
const { signIn, signUp } = require("../controller/auth.controller");
const authRouter = express.Router();

authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signUp);

module.exports = {
  authRouter,
};
