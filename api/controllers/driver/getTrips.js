const { driverServices } = require("../../services");

const getTrips = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let data = null;
  if (req.user) {
    isAuthorized = req.user.role == 1;
    isLoggedIn = true;

    if (isAuthorized) {
      let driverId = req.params.driverId;
      data = await driverServices.getTrips(driverId);
    }
  }
  res.send({ isLoggedIn, isAuthorized, data });
};
module.exports = getTrips;
