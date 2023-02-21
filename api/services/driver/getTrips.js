const { Order, Trip } = require("../../models");

const getTrips = async (driverId) => {
  let data = new Array();

  try {
    returnedTrips = await Trip.findAll({
      where: {
        driverId: driverId,
      },
    });
    if (returnedTrips) {
      for (let i = 0; i < returnedTrips.length; i++) {
        let order = await Order.findByPk(returnedTrips[i].orderId);
        let orderTrip = {
          order,
          trip: returnedTrips[i],
        };
        data.push(orderTrip);
      }
    }
  } catch (e) {
    console.log(e);
  }
  return data;
};

module.exports = getTrips;
