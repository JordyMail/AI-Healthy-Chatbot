// chatbot.js

// Basic Chatbot Functionality
const chatbotForm = document.createElement('form');
const chatbotInput = document.createElement('input');
const chatbotMessages = document.createElement('div');

chatbotForm.id = 'chatbot-form';
chatbotInput.id = 'chatbot-input';
chatbotInput.type = 'text';
chatbotInput.placeholder = 'Ask me anything about your health...';
chatbotMessages.id = 'chatbot-messages';

// Append elements to chatbot container
document.body.appendChild(chatbotMessages);
document.body.appendChild(chatbotForm);
chatbotForm.appendChild(chatbotInput);

// Example responses (can be replaced with AI integration)
const chatbotResponses = {
    'hello': 'Hi there! How can I assist you with your health today?',
    'how are you': 'I am just a bot, but I am here to help you!',
    'health tips': 'Stay hydrated, eat balanced meals, and exercise regularly!',
    'default': 'I am sorry, I didn\'t understand that. Can you rephrase?'
};

// Handle chatbot input submission
chatbotForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userMessage = chatbotInput.value.toLowerCase();
    chatbotMessages.innerHTML += `<div class='user-message'>${userMessage}</div>`;

    let botResponse = chatbotResponses['default'];
    Object.keys(chatbotResponses).forEach(key => {
        if (userMessage.includes(key)) {
            botResponse = chatbotResponses[key];
        }
    });

    chatbotMessages.innerHTML += `<div class='bot-message'>${botResponse}</div>`;

    chatbotInput.value = ''; // Clear the input field

    // Scroll to the latest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
});

// Basic CSS for the chatbot (Optional: Include in styles.css)
const chatbotStyles = document.createElement('style');
chatbotStyles.textContent = `
    #chatbot-messages {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        max-height: 300px;
        overflow-y: auto;
        margin-bottom: 10px;
        background-color: #f9f9f9;
    }
    .user-message {
        text-align: right;
        color: #333;
        margin-bottom: 10px;
    }
    .bot-message {
        text-align: left;
        color: #4CAF50;
        margin-bottom: 10px;
    }
    #chatbot-form {
        display: flex;
    }
    #chatbot-input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
`;
document.head.appendChild(chatbotStyles);
