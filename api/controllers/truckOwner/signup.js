const { truckOwnerServices } = require("../../services");

const signup = async (req, res) => {
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let password = req.body.password;
  let isCreated = false;
  let msg;

  try {
    let { create, createMessage } = await truckOwnerServices.signup(
      phoneNumber,
      email,
      password
    );
    isCreated = create;
    msg = createMessage;
  } catch (e) {
    console.log(e);
  }

  res.send({ isCreated, msg });
};

module.exports = signup;
