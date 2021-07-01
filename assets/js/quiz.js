//Variables for questions
var question = document.querySelector('#question');
var choices = array.from(document.querySelector('.choice-text'));
var answer = document.querySelector('.answer');
var timer = document.querySelector('time-left');
var score = 100;
var totalQuestions = 5;

//question.value ="TESTING"
//question = questions[0];

//Calling questions and answers
let currentQuestion = {}
let CorrectAnswer = true
let timeCount = 30
let availableQuestions = []

let questions = [
    {
        question: 'During program development, software requirements specify',
        choice1: 'How the program will accomplish the task',
        choice2: 'What the task is that the program must perform',
        choice3: 'How to divide the task into subtasks',
        choice4: 'How to test the program when it is done',
        answer: 'What the task is that the rogram must perform',
    },
    {
        question: 'Which of the following is the process of finding errors and fixing them within a program?',
        choice1: 'Compiling',
        choice2: 'Executing',
        choice3: 'Debugging',
        choice4: 'Scanning',
        answer: 'Debugging',
    },
    {
        question: 'Which command will stop an infinite loop?',
        choice1: 'Alt-C',
        choice2: 'Shift-C',
        choice3: 'Esc',
        choice4: 'Ctrl-C',
        answer: 'Ctrl-C',
    },
    {
        question: 'A loop that never ends is referred to as a(n)_________.',
        choice1: 'While loop',
        choice2: 'Infinite loop',
        choice3: 'Recursive loop',
        choice4: 'for loop',
        answer: 'Infinite loop',
    },
    {
        question: 'Which one uses for execute a section of code ten times within a program',
        choice1: 'If-Else',
        choice2: 'While',
        choice3: 'For',
        choice4: 'If',
        answer: 'For',
    },
]

var startQuiz = function (){
    //getNewQuestion()
    var questionTitle = "Hello";
    question = questionTitle;
}
