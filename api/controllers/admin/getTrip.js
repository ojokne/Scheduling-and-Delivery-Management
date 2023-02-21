const { adminServices } = require("../../services");

const getTrip = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let trip = null;
  if (req.user) {
    isAuthorized = req.user.role == 0;
    isLoggedIn = true;

    if (isAuthorized) {
      let orderId = req.params.orderId;
      trip = await adminServices.getTrip(orderId);
    }
  }
  res.send({ isLoggedIn, isAuthorized, trip });
};
module.exports = getTrip;
