const { adminServices } = require("../../services");

const getOrders = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let orders = null;
  if (req.user) {
    isAuthorized = req.user.role == 0;
    isLoggedIn = true;

    if (isAuthorized) {
      try {
        orders = await adminServices.getOrders();
      } catch (e) {
        console.log(e);
      }
    }
  }
  res.send({ isLoggedIn, isAuthorized, orders });
};
module.exports = getOrders;
