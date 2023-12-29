import nodemailer from "nodemailer";

export const sendMail = async({
    server, 
    portnumber, 
    username, 
    password, 
    subject, 
    mailcontent, 
    recipient}: any) => {
    try {
        
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: server,
            port: portnumber,
            secure: true,
            auth: {
              user: username,
              pass: password,
            },
          });

        //   console.log(`${server}\n${portnumber}\n${username}\n${password}`)

          const mailOptions = {
            from: username,
            to: recipient,
            subject: subject,
            html: mailcontent
          }

          const mailResponse = await transporter.sendMail(mailOptions);
          return mailResponse;


    } catch (error) {
        
    }
}
