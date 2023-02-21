const { Order, Driver, Client } = require("../../models");
const { sendEmail } = require("../../utilities");
const schedule = async (orderId, scheduleDate) => {
  let scheduleOrder = false;
  let scheduleMessage = "Order does not exist";
  let order = await Order.findByPk(orderId);
  if (order) {
    scheduleMessage = "Delivery Scheduled";
    if (!order.isConfirmed) {
      scheduleMessage = "Order not confirmed";
    } else {
      scheduleOrder = true;
      if (order.scheduleDate === null) {
        let driver = await Driver.findOne({
          where: {
            isAvailable: true,
          },
        });
        if (driver) {
          order.scheduleDate = scheduleDate;
          order.driverId = driver.id;
          driver.isAvailable = false;
          order.save();
          driver.save();
          let client = await Client.findByPk(order.clientId);
          let date = new Date(scheduleDate).toDateString();
          try {
            await sendEmail(
              driver.email,
              "Delivery Scheduled",
              `<p>You have been assigned to handle a delivery on <strong>${date}</strong><p>
              <p>Please check your account for more details<p>
              <p>Thank you<p>`
            );
            await sendEmail(
              client.email,
              "Delivery Scheduled",
              `<p>You Order has been scheduled for Delivery<p>
                <p>Delivery is scheduled for <strong>${date}</strong><p>
                <p>Thank you<p>`
            );
          } catch (e) {
            console.log(e);
          }
        } else {
          scheduleMessage = "Drivers unavailable";
        }
      }
    }
  }
  return { scheduleOrder, scheduleMessage };
};

module.exports = schedule;
