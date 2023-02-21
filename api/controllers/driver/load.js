const { driverServices } = require("../../services");

const load = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let isLoaded = false;
  let msg;
  if (req.user) {
    isAuthorized = req.user.role == 1;
    isLoggedIn = true;

    if (isAuthorized) {
      let orderId = req.query.orderId;
      let driverId = req.query.driverId;
      let { loadOrder, loadMessage } = await driverServices.load(
        orderId,
        driverId
      );
      isLoaded = loadOrder;
      msg = loadMessage;
    }
  }
  res.send({ isLoggedIn, isAuthorized, isLoaded, msg });
};

module.exports = load;
