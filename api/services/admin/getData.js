const {
  Client,
  Driver,
  TruckOwner,
  Order,
  Trip,
  Truck,
} = require("../../models");

const getData = async () => {
  let allClients = null;
  let allDrivers = null;
  let allTruckOwners = null;
  let allOrders = null;
  let allTrips = null;
  let allTrucks = null;

  try {
    allClients = await Client.findAll({
      attributes: {
        exclude: ["password", "code"],
      },
    });
    allDrivers = await Driver.findAll({
      attributes: {
        exclude: ["password", "code"],
      },
    });
    allTruckOwners = await TruckOwner.findAll({
      attributes: {
        exclude: ["password", "code"],
      },
    });
    allOrders = await Order.findAll();
    allTrips = await Trip.findAll();
    allTrucks = await Truck.findAll();
  } catch (e) {
    console.log(e);
  }
  return {
    allClients,
    allDrivers,
    allTruckOwners,
    allOrders,
    allTrucks,
    allTrips,
  };
};

module.exports = getData;
