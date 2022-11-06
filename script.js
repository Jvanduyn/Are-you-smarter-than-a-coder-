var start = document.getElementById("start");
var time = document.getElementById("timer");
// var instructions = document.getElementById("#first");
var showQuestion = document.querySelector("#second");
var showChoices = document.querySelector("#third");
var index = [0];
var points = [0];
//storing all the questions as objects inside of an array
var questions = [
    {
        title: "Questions 1",
        question: "How are multiple variables stored in Javascript?",
        choices: ["String's", "Boolean's", "Storable's", "Array's"],
        answer: "Array's"
    },
    {
        title: "Question 2",
        question: "What tool is provided by chrome for developers?",
        choices: ["Chromedev", "Chrometools", "console", "Devtools"],
        answer: "Devtools"
    },
    {
        title: "Question 3",
        question: "Which of the following is a data type in Javascript?",
        choices: ["Function", "Method", "Return", "Boolean"],
        answer: "Boolean"
    },
    {
        title: "Question 4",
        question: "What is used to surround a string?",
        choices: ["Parenthesis", "Comma's", "Explimation mark", "Quotations"],
        answer: "Quotations"
    },
    {
        title: "Question 5",
        question: "Which of the following is a type of loop?",
        choices: ["if", "else", "function", "for"],
        answer: "for"
    }
];
var qst = questions[index];
//timer starts at 50 seconds and if the timer hits 0 its set to stop
var secondsLeft = 50;
var timerInterval;
function startTimer() {
    time.textContent = secondsLeft
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft

        if (secondsLeft === 0 || index == questions.length - 1) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
};

//once the start button is pressed, runs a function that pulls the question depending on where the index is currently set
var getQuestion = function () {
    showQuestion.textContent = questions[index].question;
    for (let i = 0; i < questions[index].choices.length; i++) {

        var li = document.createElement('button');
        li.textContent = qst.choices[i];
        showChoices.appendChild(li);

        li.addEventListener("click", function (event) {
            var element = event.target;
            if (element.textContent == qst.answer) {
                index++;
                nextQuestion();
            } else {
                console.log("incorrect")
                index++;
                nextQuestion();
                secondsLeft = secondsLeft - 5;
            };
        });
    }
};
//listens for the click of the start button then removes instructions text
start.addEventListener("click", function () {
    startTimer();
    var instructions = document.querySelector("#first");
    instructions.setAttribute("style", "display: none;");
    getQuestion();
});

var nextQuestion = function (event) {
    showQuestion.textContent = questions[index].question;
    for (let i = 0; i < questions[index].choices.length; i++) {

        var li = document.createElement('button');
        li.textContent = qst.choices[i];
    }
};

var end = function () {
    if (secondsLeft == 0) {
        console.log("this is the end");
    };
    if (index = [5]) {
        console.log("out of questions")
    }
};

// if else statement for right answers with points and wrong answer for minus time
// shane said something about modles? 

//take btnEl set text to choice[i]

//need to check if we have any more questions
// no endquiz
//yes - next question

// end game function { clear page of quiz
//render high score board
//get values user types in + score
