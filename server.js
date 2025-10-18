const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', publicRoutes);

app.get('/api/health', (_, res) => res.json({ success: true, message: 'Server running' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));