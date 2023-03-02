const getUser = require("./getUser");
const verifyUser = require("./verifyUser");

const findAndVerify = async (id, role) => {
  let isAuthenticated = false;
  let user = await getUser(id, role);
  if (user) {
    isAuthenticated = verifyUser(password, user.password);
  }
  return { user, isAuthenticated };
};

module.exports = findAndVerify;
