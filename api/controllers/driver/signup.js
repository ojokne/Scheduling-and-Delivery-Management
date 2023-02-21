const { driverServices } = require("../../services");

const signup = async (req, res) => {
  let permitNumber = req.body.permitNumber;
  let nin = req.body.nin;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let password = req.body.password;
  let isCreated = false;
  let msg;

  try {
    let { create, createMessage } = await driverServices.signup(
      permitNumber,
      nin,
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
