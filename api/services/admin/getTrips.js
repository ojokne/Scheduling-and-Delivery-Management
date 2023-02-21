const { Trip } = require("../../models");

const getTrips = async () => {
  return await Trip.findAll();
};

module.exports = getTrips;
