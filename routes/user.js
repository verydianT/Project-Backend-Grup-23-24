const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.post("/register", UserController.createUser);
router.get("/", UserController.getUsers);
router.post("/login", UserController.loginUser);
router.post("/wishlist", UserController.saveWishlist);

module.exports = router;
