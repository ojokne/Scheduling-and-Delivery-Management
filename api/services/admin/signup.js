if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const bcrypt = require("bcrypt");

const { Admin } = require("../../models");
const { generateCode } = require("../../utilities");

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const signup = async (email, password) => {
  let createMessage = "An admin already exists with that email";
  let create = false;

  try {
    let admin = await Admin.findOne({ where: { email: email } });
    if (!admin) {
      code = generateCode(5);
      await Admin.create({
        email: email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        code: generateCode(5),
      });
      createMessage = "Admin created successfully";
      create = true;
    }
  } catch (e) {
    console.log(e);
    createMessage = "An error occurred";
  }
  return { createMessage, create };
};

module.exports = signup;
