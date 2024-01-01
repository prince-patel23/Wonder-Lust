const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { route } = require("./listing");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

//signUp

router.get("/signup", userController.randerSignupForm);

router.post("/signup", wrapAsync(userController.signUp));

//logIn

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.logIn
);

//logOUt

router.get("/logout", userController.logOut);

module.exports = router;
