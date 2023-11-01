const { comparePassword } = require("../helpers/bcrypt");
const { jwtLogin } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, username, password } = req.body;
      const createdUser = await User.create({ email, username, password });
      res.status(201).json({
        id: createdUser.id,
        email: createdUser.email,
        username: createdUser.username,
      });
    } catch (error) {
      res.send(error.errors[0].message);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: "No User in Database" };
      }
      const comparePw = await comparePassword(password, findUser.password);
      if (!comparePw) {
        throw { name: "Wrong Password" };
      }
      const access_token = jwtLogin({
        id: findUser.id,
        username: findUser.username,
      });
      res
        .status(200)
        .json({
          access_token,
          id: findUser.id,
          email: findUser.email,
          username: findUser.username,
        });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = UserController;
