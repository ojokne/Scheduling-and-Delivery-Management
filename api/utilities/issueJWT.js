if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const jwt = require("jsonwebtoken");

const issueJWT = (user) => {
  const payload = {
    sub: user.id,
    role: user.role,
  };
  const signedToken = jwt.sign(payload, process.env.SECRET_KEY);

  return { issuedToken: "Bearer " + signedToken };
};

module.exports = issueJWT;
