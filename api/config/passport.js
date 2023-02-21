const { findAndVerify } = require("../utilities");

const LocalStrategy = require("passport-local").Strategy;

const initializePassport = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, cb) => {
        try {
          const { user, isAuthenticated } = await findAndVerify(
            email,
            password,
            req.body.role
          );
          if (user) {
            if (isAuthenticated) {
              return cb(null, user);
            } else {
              return cb(null, false, { message: "Password incorrect" });
            }
          } else {
            return cb(null, false, { message: "No user with that username" });
          }
        } catch (err) {
          return cb(err);
        }
      }
    )
  );

  passport.serializeUser((user, cb) => {
    return cb(null, { id: user.id, email: user.email, role: user.role });
  });

  passport.deserializeUser((user, cb) => {
    return cb(null, user);
  });
};

module.exports = initializePassport;
