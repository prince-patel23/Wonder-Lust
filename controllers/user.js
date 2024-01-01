const User = require("../models/user.js");

//signin

module.exports.randerSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = User({ email, username });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.login(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to WonderLust.");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

//login

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.logIn = async (req, res) => {
  req.flash("success", "welcome back to wonderlust");
  let redirectUrl = req.session.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logOut = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "YOU ARE NOW LOGOUT.");
    res.redirect("/listings");
  });
};
