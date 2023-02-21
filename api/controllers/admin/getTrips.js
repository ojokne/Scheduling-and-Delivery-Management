const { adminServices } = require("../../services");

const getTrips = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let trips = null;
  if (req.user) {
    isAuthorized = req.user.role == 0;
    isLoggedIn = true;

    if (isAuthorized) {
      trips = await adminServices.getTrips();
    }
  }
  res.send({ isLoggedIn, isAuthorized, trips });
};
module.exports = getTrips;
