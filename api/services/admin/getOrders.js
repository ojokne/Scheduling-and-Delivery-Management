const { Order, Trip } = require("../../models");

const getOrders = async () => {
  let orders = new Array();
  try {
    returnedOrders = await Order.findAll();

    for (let i = 0; i < returnedOrders.length; i++) {
      let order = {
        order: returnedOrders[i],
        trip: null,
      };
      let trip = await Trip.findOne({
        where: {
          orderId: returnedOrders[i].id,
        },
      });
      if (trip) {
        order.trip = trip;
      }

      orders.push(order);
    }
  } catch (e) {
    console.log(e);
  }
  return orders;
};

module.exports = getOrders;
