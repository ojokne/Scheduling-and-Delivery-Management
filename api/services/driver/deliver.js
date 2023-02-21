const { Order, Client, Driver, Trip } = require("../../models");
const { sendEmail } = require("../../utilities");

const deliver = async (orderId, driverId) => {
  let deliverOrder = false;
  let deliverMessage = "Order does not exist";
  let trip = null;

  try {
    trip = await Trip.findOne({
      where: {
        orderId: orderId,
        driverId: driverId,
      },
    });
  } catch (e) {
    console.log(e);
  }
  if (trip) {
    deliverMessage = "Order delivered Successfully";
    if (!trip.isLoaded) {
      deliverMessage = "Order has not been loaded";
    } else {
      if (!trip.isDelivered) {
        trip.isDelivered = true;
        trip.deliveredAt = new Date().toISOString();
        trip.save();
        deliverOrder = true;

        try {
          let driver = await Driver.findByPk(trip.driverId);
          driver.isAvailable = true;
          driver.save();

          let order = Order.findByPk(trip.orderId);
          let client = await Client.findOne({
            where: {
              id: order.clientId,
            },
          });

          await sendEmail(
            client.email,
            "Delivery Complete",
            `<p>You Order has been successfully delivered<p>
          <p>Thank you<p>`
          );
        } catch (e) {
          console.log(e);
        }
      } else {
        deliverOrder = true;
      }
    }
  }
  return { deliverOrder, deliverMessage };
};

module.exports = deliver;
