const { adminServices } = require("../../services");

const signup = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let msg;
  let isCreated;
  try {
    let { createMessage, create } = await adminServices.signup(email, password);
    msg = createMessage;
    isCreated = create;
  } catch (e) {
    console.log(e);
  }
  res.send({ msg, isCreated });
};

module.exports = signup;
