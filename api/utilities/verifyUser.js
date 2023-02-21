const bcrypt = require("bcrypt");

const verifyUser = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = verifyUser;
