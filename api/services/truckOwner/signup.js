if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const bcrypt = require("bcrypt");

const { TruckOwner } = require("../../models");
const { generateCode } = require("../../utilities");

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

const signup = async (phoneNumber, email, password) => {
  let createMessage = "A truck owner already exists with that email";
  let create = false;
  let truckOwner = null;

  try {
    truckOwner = await TruckOwner.findOne({ where: { email: email } });

    if (!truckOwner) {
      code = generateCode(5);
      await TruckOwner.create({
        phoneNumber,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        code: generateCode(5),
      });
      createMessage = "TruckOwner created successfully";
      create = true;
    }
  } catch (e) {
    console.log(e);
    createMessage = "An error occurred";
  }
  return { create, createMessage };
};

module.exports = signup;
