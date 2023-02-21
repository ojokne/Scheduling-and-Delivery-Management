if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const bcrypt = require("bcrypt");

const { Client } = require("../../models");
const { generateCode } = require("../../utilities");

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const signup = async (name, phoneNumber, email, password) => {
  let createMessage = "A client already exists with that email";
  let create = false;
  let client = await Client.findOne({ where: { email: email } });
  if (!client) {
    try {
      await Client.create({
        name,
        phoneNumber,
        email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        code: generateCode(5),
      });
      createMessage = "Client created successfully";
      create = true;
    } catch (e) {
      console.log(e);
      createMessage = "An error occured";
    }
  }
  return { create, createMessage };
};
module.exports = signup;
