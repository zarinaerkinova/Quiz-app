let app = document.getElementById('app');
let button = document.getElementById('start-quiz');
let quiz = document.getElementById('quiz-container');
let question = document.getElementById('question');
let options = document.getElementById('options');
let nextQuestion = document.getElementById('next-question');
let restart = document.querySelector('.restart');
let finalScore = document.querySelector('.finalScore');

let score = 0;
let questionIndex = 0;

let questions = [
    {
        question: "Which country has three official capital cities?",
        options: ["Australia", "South Africa", "India", "Brazil"],
        answer: "South Africa"
    },
    {
        question: "Which element is liquid at standard room temperature?",
        options: ["Mercury", "Sodium", "Lead", "Titanium"],
        answer: "Mercury"
    },
    {
        question: "Which is the only country named after a woman?",
        options: ["Bolivia", "Georgia", "Saint Lucia", "Philippines"],
        answer: "Saint Lucia"
    },
    {
        question: "What is the escape velocity required to leave Earth's gravity?",
        options: ["4.2 km/s", "7.9 km/s", "11.2 km/s", "15.4 km/s"],
        answer: "11.2 km/s"
    },
    {
        question: "Which city is considered the oldest continuously inhabited city?",
        options: ["Athens", "Damascus", "Jerusalem", "Cairo"],
        answer: "Damascus"
    },
    {
        question: "Which country has the longest coastline?",
        options: ["Russia", "Indonesia", "Canada", "Australia"],
        answer: "Canada"
    },
    {
        question: "Which empire created the first known postal system?",
        options: ["Roman Empire", "Persian Empire", "Chinese Tang Dynasty", "Byzantine Empire"],
        answer: "Persian Empire"
    },
    {
        question: "Which river flows through the most countries?",
        options: ["Amazon", "Danube", "Nile", "Congo"],
        answer: "Danube"
    },
    {
        question: "What comes once in a minute, twice in a moment, and never in a thousand years?",
        options: ["The letter 'M'", "A second", "A thought", "A blink"],
        answer: "The letter 'M'"
    },
    {
        question: "In computer science, which structure uses LIFO logic?",
        options: ["Queue", "Array", "Linked list", "Stack"],
        answer: "Stack"
    }
];

button.addEventListener('click', function () {
    quiz.style.display = 'block';
    button.style.display = 'none';
    loadQuestion();
})

function loadQuestion() {
    question.innerHTML = questions[questionIndex].question;
    for (let j = 0; j < questions[questionIndex].options.length; j++) {
        let option = document.createElement('button');
        option.className = 'option-button';
        option.innerHTML = questions[questionIndex].options[j];
        options.appendChild(option);
        option.addEventListener('click', function () {
            checkAnswer(option);
        });
    }
}

nextQuestion.addEventListener('click', function () {
    options.innerHTML = '';
    nextQuestion.style.display = 'none';
    if (questionIndex < questions.length) {
        loadQuestion();
    } else {
        quiz.style.display = 'none';
        finalScore.innerHTML = `Quiz Over! Your final score is ${score} out of ${questions.length}.`;
        restart.style.display = 'block';
    }
})

restart.addEventListener('click', function () {
    score = 0;
    questionIndex = 0;
    restart.style.display = 'none';
    options.innerHTML = '';
    finalScore.innerHTML = '';
    quiz.style.display = 'block';
    loadQuestion();
})

function checkAnswer(selectedOption) {
    console.log(selectedOption);

    if (selectedOption.innerHTML === questions[questionIndex].answer) {
        score++;
        questionIndex++;
        nextQuestion.style.display = 'block';
        selectedOption.style.backgroundColor = 'green';
    } else {
        questionIndex++;
        nextQuestion.style.display = 'block';
        selectedOption.style.backgroundColor = 'red';
    }

    for (let i = 0; i < options.children.length; i++) {
        options.children[i].disabled = true;
    }
}