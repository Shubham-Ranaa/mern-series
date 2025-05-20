// Quiz questions data
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
        correctAnswer: 1
    },
    {
        question: "Which is the largest ocean on Earth?",
        choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3
    }
];

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerId = null;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const timeElement = document.getElementById('time');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

// Initialize the quiz
function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    totalQuestionsElement.textContent = questions.length;
    showScreen(startScreen);
}

// Show the specified screen and hide others
function showScreen(screenToShow) {
    [startScreen, quizScreen, endScreen].forEach(screen => {
        screen.classList.add('hide');
    });
    screenToShow.classList.remove('hide');
}

// Start the quiz
function startQuiz() {
    showScreen(quizScreen);
    displayQuestion();
    startTimer();
}

// Display the current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Clear previous choices
    choicesElement.innerHTML = '';
    
    // Create new choice buttons
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.addEventListener('click', () => handleAnswer(index));
        choicesElement.appendChild(button);
    });
}

// Handle user's answer
function handleAnswer(choiceIndex) {
    const question = questions[currentQuestionIndex];
    const buttons = choicesElement.getElementsByClassName('choice-btn');
    
    // Disable all buttons
    Array.from(buttons).forEach(button => {
        button.disabled = true;
    });
    
    // Show correct/wrong feedback
    if (choiceIndex === question.correctAnswer) {
        buttons[choiceIndex].classList.add('correct');
        score++;
    } else {
        buttons[choiceIndex].classList.add('wrong');
        buttons[question.correctAnswer].classList.add('correct');
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

// Start the timer
function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

// End the quiz
function endQuiz() {
    clearInterval(timerId);
    const finalScore = Math.round((score / questions.length) * 100);
    scoreElement.textContent = finalScore;
    showScreen(endScreen);
}

// Event listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', initializeQuiz);

// Initialize the quiz when the page loads
initializeQuiz();