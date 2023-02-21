if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const bcrypt = require("bcrypt");

const { Driver } = require("../../models");
const { generateCode } = require("../../utilities");

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

const signup = async (permitNumber, nin, phoneNumber, email, password) => {
  let createMessage = "A driver already exists with that email";
  let create = false;
  let driver = null;

  try {
    driver = await Driver.findOne({ where: { email: email } });

    if (!driver) {
      code = generateCode(5);
      await Driver.create({
        permitNumber,
        nin,
        phoneNumber,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        code: generateCode(5),
      });
      createMessage = "Driver created successfully";
      create = true;
    }
  } catch (e) {
    console.log(e);
    createMessage = "An error occurred";
  }
  return { create, createMessage };
};

module.exports = signup;
