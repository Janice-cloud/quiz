var highscorenavEl = document.getElementById("highscoreNav")
var startpageEl = document.getElementById("startPage");
var startBtnEl = document.getElementById("start");

var questionEl = document.getElementById("question");
var firstAnswerEl = document.getElementById("0");
var secondAnswerEl = document.getElementById("1");
var thirdAnswerEl = document.getElementById("2");
var fourthAnswerEL = document.getElementById("3");
var messageEl = document.getElementById("message");

var mynameBtnEl = document.getElementById("myNameBtn");
var scoreListEl = document.getElementById("scorelist");

var goBackEl = document.getElementById("goBack");
var clearscoreEl = document.getElementById("clearScore");



document.getElementById("form").style.display = "none";
document.getElementById("highScore").style.display = "none";



var currentQuestion = 0;
var score = 0;

var quiz = [
    {
        question: "Commonly used data types DO NOT include :",
        answers: [
            "1. Strings",
            "2. Booleans",
            "3. Alerts",
            "4. Numbers"
        ],
        correctanswer : 2   
    },
    {
        question: "The condition in an if/else statement is enclosed within _______ ?",
        answers: [
            "1. Quotes",
            "2. Curly brackets",
            "3. Parentheses",
            "4. Square brackets"
        ],
        correctanswer : 2
        
    },
    {
        question: "Arrays in JavaScript can be used to store ______ ",
        answers: [
            "1. Numbers and strings",
            "2. Other arrays",
            "3. Booleans",
            "4. all of the above"
        ],
        correctanswer : 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is : ",
        answers: [
            "1. JavaScript",
            "2. termina / bash",
            "3. for loops",
            "4. console.log"
        ],
        correctanswer : 3
    },
];



//function to start Quiz and timer 75 sec
function startQuiz() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("highScore").style.display = "none";
    update(currentQuestion);
    
    
}

//function up date question .
function update(quizIndex) {
    questionEl.textContent = quiz[quizIndex].question;
    firstAnswerEl.textContent = quiz[quizIndex].answers[0];
    secondAnswerEl.textContent = quiz[quizIndex].answers[1];
    thirdAnswerEl.textContent = quiz[quizIndex].answers[2];
    fourthAnswerEL.textContent = quiz[quizIndex].answers[3];
}

//function to verify if answer 
//if correct answer is clicked then move to the next question; add 1 to the counter; add text correct.
//if answer is incorrect move to next question; deduct 10 sec from the timer
function verify (event) {
    var element = event.target;
    var answer = parseInt(element.id);
    var messages = ["correct", "wrong"];
        
    if (answer === quiz[currentQuestion].correctanswer) {
        score++;
        currentQuestion++;
        update(currentQuestion);
        messageEl.textContent = messages[0];  
    } else { 
        currentQuestion++;
        update(currentQuestion);
        messageEl.textContent = "";
        messageEl.textContent = messages[1];
        };  
        
        console.log(answer);
        console.log(quiz[currentQuestion].correctanswer);
        console.log(score);
        
};

    //once user has progressed to end of the quiz then ask to fill final form. input score and name onto hightscore list.
    //timer needs to clear.
function showFinalForm() {
    if (currentQuestion >= quiz.length) {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("title").textContent = "ALL DONE ! ";
    document.getElementById("finalscore").textContent = "Final score is " + score;
    document.getElementById("form").style.display = "block";

    }            
};
    

function renderhighscorelist (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        document.getElementById("form").style.display = "none";
        var mynameEl = document.getElementById("myName-text").value;
        mynameEl.innerHTML = ""

        var li = document.createElement("li");
        li.textContent = mynameEl + " score is " + score;
        
        scoreListEl.appendChild(li);
        document.getElementById("highScore").style.display = "block";   
        }
}

function removeScore () {
    scoreListEl.remove();
    }

function restart() {  
    currentQuestion = 0;
    score = 0;   
    startQuiz();
}   


startBtnEl.addEventListener("click", startQuiz);

firstAnswerEl.addEventListener ("click", verify);
secondAnswerEl.addEventListener ("click", verify);
thirdAnswerEl.addEventListener ("click", verify);
fourthAnswerEL.addEventListener("click", verify);

firstAnswerEl.addEventListener ("click", showFinalForm);
secondAnswerEl.addEventListener ("click", showFinalForm);
thirdAnswerEl.addEventListener ("click", showFinalForm);
fourthAnswerEL.addEventListener("click", showFinalForm);

mynameBtnEl.addEventListener ("click", renderhighscorelist);
highscorenavEl.addEventListener("click", renderhighscorelist);

clearscoreEl.addEventListener("click", removeScore);

goBackEl.addEventListener("click", restart);


