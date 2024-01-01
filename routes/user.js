const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { route } = require("./listing");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

//signUp Routes
router
  .route("/signup")
  .get(userController.randerSignupForm)
  .post(wrapAsync(userController.signUp));

//logIn Routes

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
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
