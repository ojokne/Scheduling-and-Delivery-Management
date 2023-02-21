if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const nodemailer = require("nodemailer");

const sendEmail = async (receiver, subject, html) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to: receiver,
    subject: subject,
    html: html,
  });
};

module.exports = sendEmail;
