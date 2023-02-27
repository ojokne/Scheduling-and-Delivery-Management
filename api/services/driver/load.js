const { Trip, Client, Order } = require("../../models");
const { sendEmail } = require("../../utilities");

const load = async (orderId, driverId) => {
  let loadOrder = false;
  let loadMessage = "Order does not exist";
  let trip = null;

  try {
    trip = await Trip.findOne({
      where: {
        id: orderId,
        driverId: driverId,
      },
    });
  } catch (e) {
    console.log(e);
  }
  if (trip) {
    if (trip.scheduleDate === null) {
      loadMessage = "Order has not been scheduled for delivery";
    } else {
      loadMessage = "Order loaded successfully";
      loadOrder = true;
      if (!trip.isLoaded) {
        trip.isLoaded = true;
        trip.loadedAt = new Date().toISOString();
        trip.save();

        try {
          let order = await Order.findByPk(trip.orderId);

          let client = await Client.findOne({
            where: {
              id: order.clientId,
            },
          });

          await sendEmail(
            client.email,
            "Product Loaded",
            `<p>You Order has been successfully loaded onto the truck waiting for set off<p>
          <p>Thank you<p>`
          );
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
  return { loadOrder, loadMessage };
};

module.exports = load;
