require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User } = require('./models'); // adjust path if needed

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const email = 'aishi2808admn@gmail.com'; // Change to your admin email
    const existing = await User.findOne({ email });
    if (existing) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('password123', 10); // Change password here

    const adminUser = new User({
      email,
      password: hashedPassword,
      fullName: 'Admin User',
      role: 'admin',
      emailVerified: true,
    });

    await adminUser.save();
    console.log('Admin user created successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error creating admin:', err);
    process.exit(1);
  }
}

createAdmin();