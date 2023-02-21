const { clientServices } = require("../../services");

const order = async (req, res) => {
  let msg;
  let isLoggedIn = false;
  let isAuthorized = false;
  let isCreated = false;

  if (req.user) {
    isAuthorized = req.user.role == 2;
    isLoggedIn = true;

    if (isAuthorized) {
      let clientId = req.user.id;
      let deliveryInstructions = req.body.deliveryInstructions;
      let amountQuoted = req.body.amountQuoted;
      let pickupLocation = req.body.pickupLocation;
      let deliveryLocation = req.body.deliveryLocation;
      let productName = req.body.productName;
      let productWeight = req.body.productWeight;
      let proposedScheduleDate = req.body.proposedScheduleDate
      try {
        let { create, createMessage } = await clientServices.order(
          deliveryInstructions,
          amountQuoted,
          pickupLocation,
          deliveryLocation,
          productName,
          productWeight,
          proposedScheduleDate,
          clientId
        );
        isCreated = create;
        msg = createMessage;
      } catch (e) {
        console.log(e);
      }
    }
  }
  res.send({ msg, isLoggedIn, isAuthorized, isCreated });
};
module.exports = order;
