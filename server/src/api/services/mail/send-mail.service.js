const nodemailer = require("nodemailer");

const sendMailService = async ({ to, subject, content }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_USER, // sender address
      to, // list of receivers
      subject, // Subject line
      text: content, // plain text body
    });

    console.log("Message sent: %s", info.messageId);

    return info;
  } catch (error) {
    // console.error(error);
    throw new Error(error.message);
  }
};

module.exports = sendMailService;
