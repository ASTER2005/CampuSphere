const { transporter } = require('./config');

function generateOTP(length = 6) {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendOTPEmail(email, otp) {
  await transporter.sendMail({
    from: `"CampuSphere" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`
  });
}

module.exports = { generateOTP, sendOTPEmail };