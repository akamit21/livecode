const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authController");

router.post("/register", AuthController.register);
router.route("/login").post(AuthController.login);
router.get("/logout", AuthController.logout);

module.exports = router;
