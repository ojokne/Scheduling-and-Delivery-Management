if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const getUser = require("../utilities/getUser");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passportJWTOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,

  jwtExpired: (jwtPayload, cb) => {
    return cb(null, false, { message: "Token expired" });
  },
};

const initializePassport = (passport) => {
  passport.use(
    new JwtStrategy(passportJWTOptions, async (payload, cb) => {
      try {
        const user = await getUser(payload.sub, payload.role);
        console.log(payload);
        if (user) {
          return cb(null, user);
        } else {
          return cb(null, false, { message: "Please Login" });
        }
      } catch (err) {
        return cb(err);
      }
    })
  );
};

module.exports = initializePassport;
