var startBtn = document.getElementById("start");
var instructions = document.querySelector("#first");
var time = document.getElementById("timer");
// var instructions = document.getElementById("#first");
var showQuestion = document.querySelector("#second");
var showChoices = document.querySelector("#third");
var index = 0;
var points = [0];
// saveButton =
//storing all the questions as objects inside of an array
var questions = [
    {
        title: "Questions 1",
        question: "How are multiple variables stored in Javascript?",
        choices: ["String's", "Array's", "Storable's", "Boolean's"],
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
        choices: ["Boolean", "Method", "Return", "Function"],
        answer: "Boolean"
    },
    {
        title: "Question 4",
        question: "What is used to surround a string?",
        choices: ["Parenthesis", "Comma's", "Quotations", "Period"],
        answer: "Quotations"
    },
    {
        title: "Question 5",
        question: "Which of the following is a type of loop?",
        choices: ["if", "else", "function", "for"],
        answer: "for"
    }
];
//timer starts at 50 seconds and if the timer hits 0 its set to stop
var secondsLeft = 50;
var timerInterval;

function start() {
    startTimer();
    instructions.setAttribute("class", "none");
    getQuestion();
}


function startTimer() {
    time.textContent = secondsLeft
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft


    }, 1000);
};

//once the start button is pressed, runs a function that pulls the question depending on where the index is currently set
var getQuestion = function () {
    showQuestion.innerHTML = ''

    var qst = questions[index];

    // create an h2 to add the question into
    var questionTitle = document.createElement('h2');

    questionTitle.textContent = qst.question;

    // create the container that will house the buttons for the choices
    var questionChoices = document.createElement('div');
    for (let i = 0; i < qst.choices.length; i++) {

        var li = document.createElement('button');
        li.textContent = qst.choices[i];
        li.setAttribute('value', qst.choices[i])

        li.addEventListener("click", function (event) {
            var element = event.target.value;

            if (element !== qst.answer) {
                secondsLeft = secondsLeft - 5;
                time.textContent = secondsLeft

            }
            index++

            if (index === questions.length || secondsLeft <= 0) {
                end()
            } else {
                getQuestion()
            }



        });
        questionChoices.append(li)
    }
    showQuestion.append(questionTitle, questionChoices);
};


function end() {
    // stop timer
    clearInterval(timerInterval)
    showChoices.removeAttribute('class')
    showQuestion.setAttribute('class', 'none')

    // display final score on page
};


var highScore = []
function saveUserScore() {
    var userScore = {
        score: secondsLeft,
        initals: "#initials",
    }
    localStorage.setItem(userScore, JSON.stringify(userScore));
}
highScore.push(saveUserScore);

function renderLastScore() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastScore = JSON.parse(localStorage.getItem("userScore"));
    // Check if data is returned, if not exit out of the function
    if (lastScore !== null) {
        document.getElementById("saved-score").innerHTML = lastScore.score;
        document.getElementById("saved-name").innerHTML = lastScore.initals;
    } else {
        return;
    }
}
saveUserScore();
renderLastScore();

//listens for the click of the start button then removes instructions text
startBtn.addEventListener("click", start);