const express = require("express");
const router = express.Router();
const passport = require("passport");

router
  .route("/login")
  .get((req, res, next) => {
    res.render("login", { title: "LiveCode | Login" });
  })
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
    }),
    (req, res) => {
      res.redirect("/");
    }
  );

router.post("/register", async (req, res, next) => {
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({
      errors: errors.array(),
    });
  } else {
    const user = new User();
    (user.name = req.body.name),
      (user.email = req.body.email),
      user.setPassword(req.body.password);
    await user.save((err) => {
      if (err) {
        res.status(500).json({
          msg: "Server Error: " + err,
        });
      } else {
        res.status(201).json({
          msg: "User Added Successfully",
        });
      }
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
