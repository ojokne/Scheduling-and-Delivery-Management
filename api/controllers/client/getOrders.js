const { clientServices } = require("../../services");

const getOrders = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let orders = null;
  if (req.user) {
    isAuthorized = req.user.role == 2;
    isLoggedIn = true;

    if (isAuthorized) {
      let clientId = req.params.clientId;
      try {
        orders = await clientServices.getOrders(clientId);
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  res.send({ isLoggedIn, isAuthorized, orders });
};
module.exports = getOrders;
