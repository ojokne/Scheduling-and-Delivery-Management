const { Trip } = require("../../models");

const getTrip = async (orderId) => {
  return await Trip.findOne({
    where: {
      orderId: orderId,
    },
  });
};

module.exports = getTrip;
