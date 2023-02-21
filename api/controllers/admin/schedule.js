const { adminServices } = require("../../services");

const schedule = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let isScheduled = false;
  let msg;
  if (req.user) {
    isAuthorized = req.user.role == 0;
    isLoggedIn = true;

    if (isAuthorized) {
      let orderId = req.params.orderId;
      let scheduleDate = req.body.scheduleDate;
      let { scheduleOrder, scheduleMessage } = await adminServices.schedule(
        orderId,
        scheduleDate
      );
      isScheduled = scheduleOrder;
      msg = scheduleMessage;
    }
  }
  res.send({ isLoggedIn, isAuthorized, isScheduled, msg });
};

module.exports = schedule;
