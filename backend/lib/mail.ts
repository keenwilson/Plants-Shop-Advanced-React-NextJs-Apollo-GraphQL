// Create a transport to hook up with SMTP APIs
import { createTransport, getTestMessageUrl } from 'nodemailer';

// Use fakeService for development
const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text: string): string {
  return `
    <div style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello There!</h2>
      <p>${text}</p>
      <p>Have a nice day,</p>
      <p>Keen Wilson</p>
    </div>
    `;
}

export interface Envelope {
  from: string;
  to?: string[] | null;
}

export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}

export function sendPasswordResetEmail(resetToken: string, to: string) {
  // email the user a token
  const mailOptions = {
    to,
    from: 'test@example.com',
    subject: 'Your password reset token!',
    html: makeANiceEmail(`Your password reset token is here! 
        <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click to reset</a>
        `),
  };
  console.log('mailOptions', mailOptions);
  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('info', info);
    console.log(info.accepted, info.rejected, info.pending);
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    if (process.env.MAIL_USER.includes('ethereal.email')) {
      console.log('Preview URL: %s', getTestMessageUrl(info));
    }
  });
}
