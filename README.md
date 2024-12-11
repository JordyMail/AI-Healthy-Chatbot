# AI-Healthy-Chatbot

## Overview
The AI-Healthy-Chatbot is a web application designed to provide users with health-related guidance and recommendations through a natural language chatbot interface. Users can track their health metrics, receive personalized tips, and monitor their progress over time. The project is powered by Node.js, OpenAI, and a MongoDB database.

## Project Structure

### Frontend
- **HTML Pages:**
  - `index.html`: Home page with an introduction to the web app.
  - `chatbot.html`: Chatbot interaction interface.
  - `health-tips.html`: Page with health-related resources and tips.
  - `profile.html`: User profile and activity summary.
- **CSS:**
  - `styles.css`: Main stylesheet for layout and design.
  - Responsive design for desktop and mobile.
- **JavaScript:**
  - `main.js`: Handles general page functionality and navigation.
  - `chatbot.js`: Contains the chatbot logic (e.g., handling user input/output).
  - `health-tips.js`: Fetches and displays health-related data dynamically.

### Backend
- Implemented using Node.js for server-side logic.
- **AI API Integration:**
  - OpenAI API for chatbot responses.
- **Database:**
  - MongoDB to store user data (chat history, health preferences, progress tracking).
  - Database initialization handled via `database.js`.

### Directory Structure
```
AI-Healthy-Chatbot/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── chatbot.js
│   │   └── health-tips.js
│   ├── images/
│   │   └── (any images used in your project)
│   └── fonts/
│       └── (custom fonts, if needed)
├── backend/
│   ├── server.js
│   └── database/
│       └── database.js
├── README.md
```

## Features

### Chatbot
- Natural Language Processing (NLP)-based chatbot for health-related queries.
- Ability to handle user-specific health inquiries (e.g., nutrition, exercise).
- Integration with OpenAI for generating responses.
- Contextual memory for better conversational experience.

### Health Tracking and Recommendations
- User input form to track health metrics (e.g., weight, steps, sleep hours).
- Generate personalized health tips based on user data.
- Integration with external health APIs (e.g., fitness apps, wearable devices).

### User Dashboard
- Profile management system for users to track their health data and interactions.
- Data visualization (e.g., charts for progress over time).

### Advanced Features
- Sentiment Analysis: Detect user emotions during conversations.
- Voice Input/Output: Add speech-to-text and text-to-speech functionality for better accessibility.
- Predictive Analysis: Provide predictions or suggestions based on user health patterns.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- OpenAI API Key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/AI-Healthy-Chatbot.git
   cd AI-Healthy-Chatbot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/healthy_chatbot
     OPENAI_API_KEY=your_openai_api_key
     ```

### Running the Application
1. Start MongoDB (if running locally):
   ```bash
   mongod
   ```
2. Run the server:
   ```bash
   npm start
   ```
3. Open `index.html` in your browser to access the frontend.

## API Endpoints

### Chatbot Endpoint
- **POST** `/chat`
- **Description:** Processes user messages and returns a chatbot response.
- **Request Body:**
  ```json
  {
      "message": "Your question here",
      "userId": "user123"
  }
  ```
- **Response:**
  ```json
  {
      "botResponse": "Chatbot's response"
  }
  ```

### Health Metrics Endpoint
- **POST** `/health-metrics`
- **Description:** Updates and retrieves user health metrics.
- **Request Body:**
  ```json
  {
      "userId": "user123",
      "metrics": {
          "weight": 70,
          "steps": 10000,
          "sleepHours": 8
      }
  }
  ```
- **Response:**
  ```json
  {
      "message": "Health metrics updated successfully"
  }
  ```

## Suggested Tools and Libraries
- **Frontend:**
  - Bootstrap or Tailwind CSS for UI components.
  - Chart.js or D3.js for visualizations.
  - Vanilla JavaScript or React.js for interactivity.
- **Backend:**
  - Node.js with Express.js for server setup.
  - OpenAI API for chatbot intelligence.
  - MongoDB for database.
- **APIs and Services:**
  - Google Cloud Text-to-Speech and Speech-to-Text.
  - Health APIs (e.g., Nutritionix, Fitbit API).

## Future Enhancements
- Add an admin panel for content management and chatbot performance review.
- Enhance chatbot accuracy with custom AI models.
- Enable OAuth-based login and integration with fitness trackers.

## License
This project is licensed under the MIT License. See `LICENSE` for more details.

