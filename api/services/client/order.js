const { Order, Client } = require("../../models");
const { sendEmail } = require("../../utilities");

const order = async (
  deliveryInstructions,
  amountQuoted,
  pickupLocation,
  deliveryLocation,
  productName,
  productWeight,
  proposedScheduleDate,
  clientId
) => {
  let createMessage = "Order created successfully";
  let create = false;
  try {
    const order = await Order.create({
      deliveryInstructions,
      amountQuoted,
      pickupLocation,
      deliveryLocation,
      productName,
      productWeight,
      proposedScheduleDate,
      clientId,
    });

    let client = await Client.findOne({
      where: {
        id: order.clientId,
      },
    });

    await sendEmail(
      client.email,
      "Order Recieved",
      `<p>We have recieved your order and currently working on it<p>
      <p>Please wait for confirmation email<p>
      <p>Thank you<p>`
    );
    create = true;
  } catch (e) {
    console.log(e);
    createMessage = "An error occurred";
  }
  return { create, createMessage };
};

module.exports = order;
