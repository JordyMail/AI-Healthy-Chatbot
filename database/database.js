const mongoose = require('mongoose');

// MongoDB Configuration
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/healthy_chatbot';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

// Define schemas and models
const userSchema = new mongoose.Schema({
    username: String,
    chatHistory: Array,
    healthMetrics: Object,
});

const User = mongoose.model('User', userSchema);

module.exports = { connectDB, User };
