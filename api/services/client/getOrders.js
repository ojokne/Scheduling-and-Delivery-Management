const { Order, Trip } = require("../../models");

const getOrders = async (clientId) => {
  let orders = new Array();
  try {
    returnedOrders = await Order.findAll({
      where: {
        clientId: clientId,
      },
    });

    for (let i = 0; i < returnedOrders.length; i++) {
      let data = {
        order: returnedOrders[i],
        trip: null,
      };
      let trip = await Trip.findOne({
        where: {
          orderId: returnedOrders[i].id,
        },
      });
      if (trip) {
        data.trip = trip;
      }

      orders.push(data);
    }
  } catch (e) {
    console.log(e);
  }
  return orders;
};

module.exports = getOrders;
