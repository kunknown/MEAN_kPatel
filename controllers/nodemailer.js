//nodemailer.js

var nodemailer = require('nodemailer');

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
            user: 'k.offline.p@gmail.com',
            pass: 'Z3R0n00b@ss'
        }
    });

    var mailOptions = {
        from: data.email,
        to: 'k.offline.p@gmail.com',
        subject: data.company + ' - ' + data.firstname + ' ' + data.lastname,
        text: data.message
    };

    return await transporter.sendMail(mailOptions);
    // , (error, info)=>{
    //     if(error){
    //         console.log(error);
    //     }
    //     else{
    //         console.log(info.response);
    //     }
    // });
}