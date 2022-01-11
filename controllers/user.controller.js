const dotenv = require("dotenv");
dotenv.config();

const key = process.env.SECRET_KEY;

const jwt = require("jsonwebtoken");

const User = require("../models/user");
const MapsModel = require("../models/maps");

class UserController {
  static async saveWishlist(req, res) {
    const maps = await MapsModel.countDocuments({ name: req.body.name, address: req.body.address });
    console.log(maps)

    let result;
    if (maps) {
      result = await MapsModel.findOneAndUpdate({ name: req.body.name, address: req.body.address }, { $addToSet: { userId: req.body.userId } }, { new: true });
    } else {
      result = await MapsModel.create({ name: req.body.name, address: req.body.address, userId: [req.body.userId] });
    }

    res.status(201).json(result);
  }

  static async getUsers(req, res) {
    try {
      const usersList = await User.find();
      console.log(usersList)
      res.status(200).send(usersList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async createUser(req, res, next) {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res.status(403).json({
        error: {
          message: "email already in use!",
        },
      });
    const newUser = new User({ username, email, password });
    try {
      await newUser.save();
      const token = getSignedToken(newUser);
      res.status(200).json({
        token,
      });
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.status(403).json({
          error: {
            message: "invalid email/password",
          },
        });
      const isValid = await user.isPasswordValid(password);
      if (!isValid)
        return res.status(403).json({
          error: { message: "invalid email/password" },
        });
      const token = getSignedToken(user);
      res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

getSignedToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    key,
    { expiresIn: "1h" }
  );
};

module.exports = UserController;
