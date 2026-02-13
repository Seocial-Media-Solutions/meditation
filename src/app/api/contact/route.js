import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER, // Sending to yourself (support email)
            subject: `New Contact Form Submission from ${name}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Request</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f4f4f4; -webkit-font-smoothing: antialiased; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); font-size: 16px; }
    .header { background: linear-gradient(135deg, #10551f 0%, #0c4217 100%); color: #ffffff; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 26px; font-weight: 400; letter-spacing: 0.5px; font-family: serif; font-style: italic; }
    .content { padding: 40px 30px; }
    .welcome-text { margin-bottom: 30px; color: #666; font-size: 15px; line-height: 1.6; }
    .data-card { background: #f9f9f9; border-radius: 8px; border: 1px solid #eeeeee; padding: 25px; margin-bottom: 30px; }
    .field-row { margin-bottom: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 15px; }
    .field-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0px; }
    .label { font-size: 12px; text-transform: uppercase; color: #888888; letter-spacing: 1px; margin-bottom: 6px; font-weight: 600; }
    .value { font-size: 16px; color: #222222; font-weight: 500; }
    .message-box { background: #ffffff; border: 1px solid #e0e0e0; border-radius: 6px; padding: 15px; margin-top: 5px; color: #444; line-height: 1.6; white-space: pre-wrap; font-size: 15px; }
    .action-button { display: inline-block; background-color: #C7DC49; color: #10551f; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; margin-top: 10px; transition: background 0.3s; }
    .footer { background-color: #f9f9f9; padding: 25px; text-align: center; font-size: 13px; color: #999999; border-top: 1px solid #eeeeee; }
    .footer p { margin: 5px 0; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100%; margin: 0; border-radius: 0; }
      .header { padding: 30px 20px; }
      .content { padding: 25px 20px; }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Inquiry Received</h1>
    </div>
    
    <div class="content">
      <p class="welcome-text">
        Hello Admin,<br><br>
        You have received a new message via your website contact form. Here are the details:
      </p>
      
      <div class="data-card">
        <div class="field-row">
          <div class="label">From</div>
          <div class="value">${name}</div>
        </div>
        
        <div class="field-row">
          <div class="label">Email Address</div>
          <div class="value">
            <a href="mailto:${email}" style="color: #10551f; text-decoration: none; border-bottom: 1px dotted #10551f;">${email}</a>
          </div>
        </div>
        
        <div class="field-row">
          <div class="label">Message</div>
          <div class="message-box">${message}</div>
        </div>
      </div>
      
      <div style="text-align: center;">
        <a href="mailto:${email}?subject=Re: Your Inquiry" class="action-button">Reply to ${name.split(' ')[0]}</a>
      </div>
    </div>
    
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <p>This email was sent automatically from your website.</p>
      <p style="font-size: 11px; margin-top: 10px; color: #bbb;">${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
