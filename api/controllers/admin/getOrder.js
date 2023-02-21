const { adminServices } = require("../../services");

const getOrder = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let order = null;
  if (req.user) {
    isAuthorized = req.user.role == 0;
    isLoggedIn = true;

    if (isAuthorized) {
      let orderId = req.params.orderId;
      order = await adminServices.getOrder(orderId);
    }
  }
  res.send({ isLoggedIn, isAuthorized, order });
};
module.exports = getOrder;
