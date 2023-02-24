const { DataTypes } = require("sequelize");
const { truckOwnerServices } = require("../../services");

const getTrucks = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let data = null;
  if (req.user) {
    isAuthorized = req.user.role == 3;
    isLoggedIn = true;

    if (isAuthorized) {
      let truckOwnerId = req.params.truckOwnerId;
      try {
        data = await truckOwnerServices.getTrucks(truckOwnerId);
      } catch (e) {
        console.log(e);
      }
    }
  }
  res.send({ isLoggedIn, isAuthorized, data });
};
module.exports = getTrucks;
