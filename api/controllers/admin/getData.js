const { adminServices } = require("../../services");

const getData = async (req, res) => {
  let isLoggedIn = false;
  let isAuthorized = false;
  let clients = null;
  let drivers = null;
  let truckOwners = null;
  let orders = null;
  let trips = null;
  let trucks = null;
  let data = null;
  if (req.user) {
    isAuthorized = req.user.role == 0;
    isLoggedIn = true;

    if (isAuthorized) {
      try {
        let {
          allClients,
          allDrivers,
          allTruckOwners,
          allOrders,
          allTrucks,
          allTrips,
        } = await adminServices.getData();
        clients = allClients;
        drivers = allDrivers;
        truckOwners = allTruckOwners;
        orders = allOrders;
        trips = allTrips;
        trucks = allTrucks;

        data = {
          clients,
          drivers,
          truckOwners,
          orders,
          trips,
          trucks,
        };
      } catch (e) {
        console.log(e);
      }
    }
  }
  res.send({ isLoggedIn, isAuthorized, data });
};
module.exports = getData;
