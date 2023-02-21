const { Order, Trip, Truck } = require("../../models");

const getTrucks = async (truckOwnerId) => {
  let trucks = new Array();
  try {
    returnedTrucks = await Truck.findAll({
      where: {
        truckOwnerId: truckOwnerId,
      },
    });

    if (returnedTrucks) {
      for (let i = 0; i < returnedTrucks.length; i++) {
        let truck = {
          trips: new Array(),
          truckId: returnedTrucks[i].id,
        };
        let trips = await Trip.findAll({
          where: {
            truckId: returnedTrucks[i].id,
          },
        });

        if (trips) {
          for (let i = 0; i < trips.length; i++) {
            let order = await Order.findOne({
              where: {
                orderId: trips[i].orderId,
              },
            });
            truck.trips.push(order);
          }
        }

        trucks.push(truck);
      }
    }
  } catch (e) {
    console.log(e);
  }
  return trucks;
};

module.exports = getTrucks;
