let app = document.getElementById('app');
let button = document.getElementById('start-quiz');
let quiz = document.getElementById('quiz-container');
let question = document.getElementById('question');
let options = document.getElementById('options');
let nextQuestion = document.getElementById('next-question');
let restart = document.querySelector('.restart');
let finalScore = document.querySelector('.finalScore');

const api = 'http://localhost:5000';

let questions = [];
let score = 0;
let questionIndex = 0;

async function fetchQuestions() {
    const res = await fetch(`${api}/questions`);
    return await res.json();
}

button.addEventListener('click', function () {
    quiz.style.display = 'block';
    button.style.display = 'none';
    loadQuestion();
})

async function loadQuestion() {
    if (questions.length === 0) {
        questions = await fetchQuestions();
    }

    question.innerHTML = questions[questionIndex].question;

    options.innerHTML = '';
    questions[questionIndex].answers.forEach(answer => {
        const option = document.createElement('button');
        option.textContent = answer;
        option.className = 'option-button';

        option.addEventListener('click', function () {
            checkAnswer(option);
        });
        options.appendChild(option);
    })
}

nextQuestion.addEventListener('click', function () {
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

    if (selectedOption.innerHTML === questions[questionIndex].correctAnswer) {
        score++;
        selectedOption.style.backgroundColor = 'green';
    } else {
        selectedOption.style.backgroundColor = 'red';
    }

    for (let btn of options.children) btn.disabled = true;
    questionIndex++;
    nextQuestion.style.display = 'block';
}