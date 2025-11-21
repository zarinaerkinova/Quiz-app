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
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
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
        })
        nextQuestion.addEventListener('click', function () {
            options.innerHTML = '';
            nextQuestion.style.display = 'none';
            if (questionIndex < questions.length) {
                loadQuestion();
            } else {
                quiz.style.display = 'none';
                finalScore.innerHTML = `Quiz Over! Your final score is ${score} out of ${questions.length}.`;
                restart.style.display = 'block';
                restart.addEventListener('click', function () {
                    score = 0;
                    questionIndex = 0;
                    restart.style.display = 'none';
                    options.innerHTML = '';
                    finalScore.innerHTML = '';
                    quiz.style.display = 'block';
                    loadQuestion();
                })
            }
        })
    }
}

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