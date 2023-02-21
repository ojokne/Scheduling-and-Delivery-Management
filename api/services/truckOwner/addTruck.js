const Truck = require("../../models/Truck");

const addTruck = async (truckOwnerId, regNumber, weight) => {
  let createMessage = "Truck already added";
  let create = false;
  let truck = null;
  try {
    truck = await Truck.findOne({
      where: {
        regNumber: regNumber,
      },
    });

    if (!truck) {
      createMessage = "Truck created successfully";
      await Truck.create({
        regNumber,
        weight,
        truckOwnerId,
      });
      create = true;
    }
  } catch (e) {
    console.log(e);
    createMessage = "An error occurred";
  }
  return { create, createMessage };
};

module.exports = addTruck;
