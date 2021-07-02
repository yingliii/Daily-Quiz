const start = document.getElementById('start-btn')
const startBox = document.querySelector('.start-box')
const next = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-btn')
const evaluation = document.querySelector('#evaluation')

start.addEventListener('click', startGame)

next.addEventListener('click',() => {
    currentQuestionIndex++
    getNextQuestion()
})


function startGame() {
    //console.log('startGame')
    start.classList.add('hide')
    startBox.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    getNextQuestion()
}

function getNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    next.classList.add('hide')
    while(answerButtons.firstChild) {
        answerButtons.removeChild
        (answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        next.classList.remove('hide')
    } else {
        start.innerText = 'Restart'
        start.classList.remove('hide')
        startBox.classList.remove('hide')
        questionContainer.classList.add('hide')
    }
    //22
    next.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

//21
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'During program development, software requirements specify',
        answer: [
            { text: 'How the program will accomplish the task', correct: false },
            { text: 'What the task is that the program must perform', correct: true },
            { text: 'How to divide the task into subtasks', correct: false},
            { text: 'How to test the program when it is done', correct: false}
        ]
    },
    {
        question: 'Which of the following is the process of finding errors and fixing them within a program?',
        answer: [
            { text: 'Compiling', correct: false },
            { text: 'Executing', correct: false },
            { text: 'Debugging', correct: true},
            { text: 'Scanning', correct: false}
        ]
    },
    {
        question: 'Which command will stop an infinite loop?',
        answer: [
            { text: 'Alt-C', correct: false },
            { text: 'Shift-C', correct: false },
            { text: 'Esc', correct: false},
            { text: 'Ctrl-C', correct: true}
        ]
    },
    {
        question: 'A loop that never ends is referred to as a(n)_________.',
        answer: [
            { text: 'While loop', correct: false },
            { text: 'Infinite loop', correct: true },
            { text: 'Recursive loop', correct: false},
            { text: 'For loop', correct: false}
        ]
    },
    {
        question: 'Which one uses for execute a section of code ten times within a program',
        answer: [
            { text: 'If-Else', correct: false },
            { text: 'While', correct: false },
            { text: 'If', correct: false},
            { text: 'For', correct: true}
        ]
    },
]