const { driverServices } = require("../../services");

const deliver = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let isDelivered = false;
  let msg;
  if (req.user) {
    isAuthorized = req.user.role == 1;
    isLoggedIn = true;

    if (isAuthorized) {
      let orderId = req.query.orderId;
      let driverId = req.query.driverId;
      let { deliverOrder, deliverMessage } = await driverServices.deliver(
        orderId,
        driverId
      );
      isDelivered = deliverOrder;
      msg = deliverMessage;
    }
  }
  res.send({ isLoggedIn, isAuthorized, isDelivered, msg });
};

module.exports = deliver;
