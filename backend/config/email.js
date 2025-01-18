const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
  }
});

const sendReminderEmail = (to, itemName, expiryDate) => {
  const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: `Expiry Reminder: ${itemName}`,
      text: `Reminder: Your item "${itemName}" is expiring on ${expiryDate}. Please use it soon!`
  };

  transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
          console.error('Error sending email:', err);
      } else {
          console.log('Email sent:', info.response);
      }
  });
};

module.exports = sendReminderEmail;