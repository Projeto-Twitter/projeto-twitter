import "dotenv/config";
import { createTransport } from "nodemailer";

export default function email() {
    const transporter = createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.ADDRESS_EMAIL,
            pass: process.env.PASSWORD_EMAIL
        }
    });

    async function emailForForgotPassword(template, userPassword, to) {

      let mailOption = {
          from: process.env.SENDER_EMAIL,
          to: to,
          subject: '\[Não responda \]',
          template: template,
          text: `${userPassword}`
      };

      await transporter.sendMail(mailOption);
    }

  return {
    emailForForgotPassword
  }
}

