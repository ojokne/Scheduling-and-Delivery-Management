const passport = require("passport");

const authController = {
  loginController: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      let isAuthenticated = false;
      if (err) {
        console.log(err);
        return next(err);
      }
      if (!user) {
        return res.send({ msg: info.message, isAuthenticated });
      }
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        isAuthenticated = true;
        return res.send({
          isAuthenticated,
          id: user.id,
        });
      });
    })(req, res, next);
  },

  logoutController: (req, res) => {
    isLoggedOut = true;
    if (req.user) {
      req.logout((err) => {
        if (err) {
          isLoggedOut = false;
        }
      });
    } else {
      isLoggedOut = false;
    }
    res.send({ isLoggedOut });
  },
  checkAuth: (req, res) => {
    let isAuthenticated = false;
    let id = null;
    if (req.user) {
      isAuthenticated = true;
      id = req.user.id;
    }
    res.send({ isAuthenticated, id });
  },
};

module.exports = authController;
