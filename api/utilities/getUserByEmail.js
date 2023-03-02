const { Admin, Driver, Client, TruckOwner } = require("../models");

const getUserByEmail = async (email, role) => {
  let user = null;
  switch (role) {
    case 0: {
      try {
        user = await Admin.findOne({
          where: {
            email: email,
          },
        });
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case 1: {
      try {
        user = await Driver.findOne({
          where: {
            email: email,
          },
        });
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case 2: {
      try {
        user = await Client.findOne({
          where: {
            email: email,
          },
        });
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case 3: {
      try {
        user = await TruckOwner.findOne({
          where: {
            email: email,
          },
        });
      } catch (e) {
        console.log(e);
      }
      break;
    }
    default:
  }
  return user;
};

module.exports = getUserByEmail;
