//nodemailer.js

var nodemailer = require('nodemailer');
const config = require('../config');

module.exports.sendMail = async (data) => {
    // let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: config.email,
            pass: config.ePass
        }
    });

    var mailOptions = {
        from: data.email,
        to: config.email,
        subject: data.company + ' - ' + data.firstname + ' ' + data.lastname,
        text: data.message
    };

    return await transporter.sendMail(mailOptions);}