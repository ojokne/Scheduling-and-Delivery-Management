const getUserByEmail = require("../utilities/getUserByEmail");
const issueJWT = require("../utilities/issueJWT");
const verifyUser = require("../utilities/verifyUser");

const authController = {
  loginController: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    let isAuthenticated = false;
    let msg = "";
    let user = null;

    try {
      user = await getUserByEmail(email, role);
    } catch (e) {
      console.log(e);
    }

    if (user) {
      let isValid = verifyUser(password, user.password);
      if (isValid) {
        msg = "Success";
        isAuthenticated = true;
        let { issuedToken } = issueJWT(user);
        return res.send({
          msg,
          isAuthenticated,
          id: user.id,
          token: issuedToken,
        });
      } else {
        msg = "Incorrect password";
        return res.send({ msg, isAuthenticated });
      }
    } else {
      msg = "No user with that email";
      return res.send({ isAuthenticated, msg });
    }
  },
};

module.exports = authController;
