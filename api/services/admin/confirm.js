const { Order, Client, Trip, Driver, Truck } = require("../../models");
const { sendEmail } = require("../../utilities");

const confirm = async (orderId, truckId, driverId, scheduleDate) => {
  let confirmOrder = false;
  let confirmMessage = "Either Order or Truck or Driver does not exist";
  let order = null;
  let truck = null;
  let driver = null;
  let trip = null;
  try {
    order = await Order.findByPk(orderId);
    truck = await Truck.findByPk(truckId);
    driver = await Driver.findByPk(driverId);
    trip = await Trip.findOne({
      where: {
        orderId: orderId,
        truckId: truckId,
        driverId: driverId,
      },
    });
  } catch (e) {
    console.log(e);
  }

  if (order && driver && truck) {
    if (trip) {
      confirmMessage = "Trip already scheduled for this Order";
    } else {
      confirmMessage = "Order confirmed";
      confirmOrder = true;

      try {
        await Trip.create({
          orderId,
          truckId,
          driverId,
          scheduleDate,
        });

        order.isConfirmed = true;
        order.save();

        driver.isAvailable = false;
        driver.save();

        truck.isAvailable = false;
        truck.save();

        let client = await Client.findOne({
          where: {
            id: order.clientId,
          },
        });
        let date = new Date(scheduleDate).toDateString();

        await sendEmail(
          client.email,
          "Order Confirmation",
          `<p>Your order has been confirmed<p>
        <p>Pick up has been scheduled on <strong>${date}</strong><p>
        <p>Thank you<p>`
        );
      } catch (e) {
        console.log(e);
        msg = "An error occurred";
      }
    }
  }
  return { confirmOrder, confirmMessage };
};

module.exports = confirm;
