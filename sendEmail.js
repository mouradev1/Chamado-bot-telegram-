module.exports = (nodemailer, bodyEmail) => {
  let transporter = nodemailer.createTransport({
      host: 'smtp.weblink.com.br',
      port: 587,
      secure: false, // secure:true for port 465, secure:false for port 587
      auth: {
          user: 'dev@mourabot.com.br',
          pass: 'jose3653'
      }
  });

  let mailOptions = {
      from: '"dev@mourabot.com.br" ', // sender address
      to: 'mouralol23@gmail.com', // list of receivers
      subject: 'Chamado ONPRIMME', // Subject line
      html: `${bodyEmail.user}<br>${bodyEmail.problem}` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);

      return true
  });
}