const nodemailer = require('nodemailer');
const auth = require('../../secrets/gmailConfiguration');

// todo add newslatter
// todo deploy on heroku
// todo zadania z MNwS
// todo zadania z calek
// todo mail do natura

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth.auth,
});

const mailOptions = {
  from: 'magdabaj7@email.com', // sender address
  to: 'magdabaj@protonmail.com', // list of receivers
  subject: 'New recipes added', // Subject line
  html:
    '<h2><a href="https://www.mojewypieki.com/przepis/ciasto-czekoladowe-z-kremem-orzechowym-i-beza" target="_blank">' +
    'Ciasto czekoladowe z kremem orzechowym i bezą' +
    '</a></h2>' +
    '<img src="https://static.mojewypieki.com/wp-content/uploads/2020/04/Ciasto_czekoladowe_z_kremem_orzechowym_i_bez%C4%85_5.jpg"/>',
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log('Email sent: ' + info.response);
});
