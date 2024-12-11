// health-tips.js

// List of Health Tips
const healthTips = [
    "Stay hydrated by drinking at least 8 glasses of water a day.",
    "Eat a balanced diet with plenty of fruits, vegetables, and whole grains.",
    "Exercise for at least 30 minutes, 5 times a week.",
    "Get 7-8 hours of quality sleep every night.",
    "Practice mindfulness or meditation to reduce stress.",
    "Avoid smoking and limit alcohol consumption.",
    "Wash your hands regularly to prevent illness.",
    "Schedule regular check-ups with your healthcare provider.",
    "Maintain a healthy weight to lower the risk of chronic diseases.",
    "Spend time outdoors for fresh air and sunlight."
];

// Function to Generate Random Health Tips
function displayRandomHealthTip() {
    const randomIndex = Math.floor(Math.random() * healthTips.length);
    return healthTips[randomIndex];
}

// Add Health Tips Section to the DOM
const healthTipsSection = document.createElement('section');
healthTipsSection.id = 'health-tips-section';
healthTipsSection.innerHTML = `
    <h2>Daily Health Tip</h2>
    <p id="daily-health-tip">${displayRandomHealthTip()}</p>
    <button id="new-tip-button">Show Another Tip</button>
`;

document.body.appendChild(healthTipsSection);

// Add Event Listener to Button
const newTipButton = document.getElementById('new-tip-button');
newTipButton.addEventListener('click', () => {
    const tipElement = document.getElementById('daily-health-tip');
    tipElement.textContent = displayRandomHealthTip();
});

// Basic CSS for Health Tips Section
const healthTipsStyles = document.createElement('style');
healthTipsStyles.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    #health-tips-section {
        margin: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f4f4f4;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    #health-tips-section h2 {
        color: #4CAF50;
        margin-bottom: 10px;
        font-family: 'Roboto', sans-serif;
    }
    #daily-health-tip {
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    #new-tip-button {
        padding: 10px 20px;
        font-size: 1em;
        color: #fff;
        background-color: #4CAF50;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    #new-tip-button:hover {
        background-color: #45a049;
    }
`;
document.head.appendChild(healthTipsStyles);
