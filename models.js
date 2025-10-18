const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  createdAt: { type: Date, default: Date.now },
  emailVerified: { type: Boolean, default: false },
  otp: String,
  otpExpiresAt: Date
});


const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: {type: String, required: true },
});

const examSchema = new mongoose.Schema({
  subject: String,
  date: Date,
  time: String,
  venue: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);
const Club = mongoose.model('Club', clubSchema);
const Exam = mongoose.model('Exam', examSchema);

module.exports = { User, Event, Club, Exam };