var start = document.getElementById("start");
var time = document.getElementById("timer");
var showQuestion = document.getElementsByClassName("second");
var showAnswers = document.getElementsByClassName("third");
//storing all the questions as objects inside of an array
var questions = [
    {
        title: "Questions 1",
        question: "How are multiple variables stored in Javascript?",
        answers: ["String's", "Boolean's", "Storable's"],
        answer: "Array's"
    }
    {
        title: "Question 2",
        question: "What tool is provided by chrome for developers?",
        answers: ["Chromedev", "Chrometools", "console"],
        answer: "Devtools"
    }
    {
        title: "Question 3",
        question: "Which of the following is a data type in Javascript?",
        answers: ["function", "method", "return"],
        answer: "Boolean"
    }
    {
        title: "Question 4",
        question: "What is used to surround a string?",
        answers: ["parenthesis", "comma's", "explimation mark"],
        answer: "quotations"
    }
    {
        title: "Question 5",
        question: "Which of the following is a type of loop?",
        answers: ["if", "else", "function"],
        answer: "for"
    }
];

//timer starts at 50 seconds and if the timer hits 0 its set to stop
var secondsLeft = 50;
var timerInterval;
function xyz() {
    time.textContent = secondsLeft
    //need to add a timer interval for the timer
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft

        if (secondsLeft === 0) {
            // // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);

    // add the class none to the first container
    // remove the class of none to the second container
    // run a function that will show our questions
};

function startGame() {

};

function nextQuestion() {

};

function chooseAnswer() {

};

function wrongAnswer() {
    //need to subtract 5 seconds if they get the answer wrong
};

//need to add event listener for when they click the start buttong
start.addEventListener("click", xyz)

//need to begin the quiz once they select the start button
//need to make it so that if they finish the quiz, the end of the game is displayed
//need to make it so that if the timer hits 0 before they finish, message displayed you lose pops up

//create a variable with the "title", question and multiple choices in an object

// if else statement for right answers with points and wrong answer for minus time
// shane said something about modles? 

var questionEl = h1 on index.html

// startGame function {
//     runs some code to hide main start screen
//     start timer
//     get question 

// }

// timer function {
//     startGame
// }

//get questions functions{
//  event.target
//  if choice is not correct
//  subtract time
//  else 



// need a for loop in order to loop through all of the choices

//create btnEl
//take btnEl set text to choice[i]

//need to check if we have any more questions
// no endquiz
//yes - next question

// end game function { clear page of quiz
//render high score board
//get values user types in + score

//arr set local storage}