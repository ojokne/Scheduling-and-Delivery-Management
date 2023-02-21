const { Order } = require("../../models");

const getOrder = async (orderId) => {
  return await Order.findByPk(orderId);
};

module.exports = getOrder;
