const { adminServices } = require("../../services");

const confirm = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let isConfirmed = false;
  let msg = "";

  if (req.user) {
    isAuthorized = req.user.role == 0;
    isLoggedIn = true;

    if (isAuthorized) {
      let orderId = req.params.orderId;
      let truckId = req.body.truckId;
      let driverId = req.body.driverId;
      let scheduleDate = req.body.scheduleDate;

      try {
        let { confirmOrder, confirmMessage } = await adminServices.confirm(
          orderId,
          truckId,
          driverId,
          scheduleDate
        );
        (isConfirmed = confirmOrder), (msg = confirmMessage);
      } catch (e) {
        console.log(e);
        msg = "An error occurred";
      }
    }
  }
  res.send({ isLoggedIn, isAuthorized, isConfirmed, msg });
};

module.exports = confirm;
  