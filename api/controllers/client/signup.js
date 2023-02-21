const { clientServices } = require("../../services");

const signup = async (req, res) => {
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let password = req.body.password;
  let msg;
  let isCreated;
  try {
    let { createMessage, create } = await clientServices.signup(
      name,
      phoneNumber,
      email,
      password
    );
    msg = createMessage;
    isCreated = create;
  } catch (e) {
    console.log(e);
  }
  res.send({ msg, isCreated });
};
module.exports = signup;
