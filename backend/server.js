// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
const { connectDB, User } = require('./database/database'); // Import database initialization script

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI Configuration
const openaiConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Make sure to set this in your environment variables
});
const openai = new OpenAIApi(openaiConfig);

// Connect to MongoDB
connectDB();

// Routes

// Test route
app.get('/', (req, res) => {
    res.send('AI-Healthy-Chatbot backend is running!');
});

// Chatbot route
app.post('/chat', async (req, res) => {
    const { message, userId } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        // Get OpenAI response
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: message,
            max_tokens: 150,
        });

        const botResponse = response.data.choices[0].text.trim();

        // Save chat history in MongoDB
        if (userId) {
            const user = await User.findById(userId);
            if (user) {
                user.chatHistory.push({ message, botResponse });
                await user.save();
            }
        }

        res.json({ botResponse });
    } catch (error) {
        console.error('Error in chatbot route:', error);
        res.status(500).json({ error: 'Failed to get response from chatbot' });
    }
});

// User health metrics route
app.post('/health-metrics', async (req, res) => {
    const { userId, metrics } = req.body;

    if (!userId || !metrics) {
        return res.status(400).json({ error: 'User ID and metrics are required' });
    }

    try {
        const user = await User.findById(userId);
        if (user) {
            user.healthMetrics = { ...user.healthMetrics, ...metrics };
            await user.save();
            res.json({ message: 'Health metrics updated successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error in health metrics route:', error);
        res.status(500).json({ error: 'Failed to update health metrics' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
