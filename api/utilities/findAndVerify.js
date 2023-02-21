const getUser = require("./getUser");
const verifyUser = require("./verifyUser");

const findAndVerify = async (email, password, role) => {
  let isAuthenticated = false;
  let user = await getUser(email, role);
  if (user) {
    isAuthenticated = verifyUser(password, user.password);
  }
  return { user, isAuthenticated };
};

module.exports = findAndVerify;
