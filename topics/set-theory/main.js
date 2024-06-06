//New Feature
let slider = document.querySelector(".slider");
let nextButton = document.querySelector(".next-btn");
let cards = slider.querySelectorAll(".card");
let selectAnswerErrorDisplay = document.querySelector(".select-answer-error");
let remainingQuestionsDisplay = document.querySelector(".remaining-question-display");
let numberOfScoreCard = 0;
let currentCard = 0;
let userAnswer = "";
let correctAnswer = "";
let savedScore = localStorage.getItem("score");
let score = 0;
let answeredQuestions = 0;
let topic = "set-theory"; //This is the topic of this quiz

//Load the questions from the database
let dataFromDatabase = questionsData.data; //This contains all the questions from the database
let dataFromLocalstorage = JSON.parse(localStorage.getItem(topic));
let original = []; //This will contain all the questions
let questions = []; //This will only contain the questions that have never been answered before or already answered but not correct
let numberOfQuestion = Number(localStorage.getItem("numberOfQuestionsInput")) || 10; //This is the amount of questions per game session, this will be set by the user, if not it defaults to 10 questions

//This part is responsible for loading the changes from the questions (e.g. new questions are added)
if (dataFromLocalstorage != null) {
    original = dataFromLocalstorage;
    if (original.length != dataFromDatabase.length) {
        if (original.length < dataFromDatabase.length) {
            for (let i = original.length; i < dataFromDatabase.length; i++) {
                original.push(dataFromDatabase[i]);
            }
        } else if (original.length > dataFromDatabase.length) {
            original.splice(dataFromDatabase.length);
        }

        localStorage.setItem(topic, JSON.stringify(original));
    }
} else {
    original = dataFromDatabase;
    localStorage.setItem(topic, JSON.stringify(dataFromDatabase));
}


//Sound Effects
var clickSfx = new Howl({ src: ["../../sfx/click-sfx.wav"] });
var errorSfx = new Howl({ src: ["../../sfx/error-sfx.wav"] });
var optionSelectionSfx = new Howl({
    src: ["../../sfx/option-selection-sfx.wav"]
});


//Load all the answerable questions to the memory
for (let i = 0; i < original.length; i++) {
    let item = original[i];
    if (item.answeredCorrectly) continue;
	if(questions.length < numberOfQuestion) questions.push(item);
}

//Load the questions as cards
if (questions.length == 0) ScoreCard();
for (let i = 0; i < questions.length; i++) {
    let item = questions[i];
    AddNewCard(item);
    updateDisplay();
}

updateDisplay();
selectAnswer(); //Ask the user to select an answer first
nextButton.addEventListener("click", () => {
    let explanationWrapper = cards[currentCard].querySelector(".explanation-wrapper");

    //If user didn't select an answer
    if (userAnswer == "") {
        selectAnswer();
        selectAnswerErrorDisplay.style.display = "flex";
        errorSfx.play();
        //alert("Please select an answer");
    } else {
        clickSfx.play();
        if (explanationWrapper.style.display == "block") {
            //Set the question to already answered
            let cardId = cards[currentCard].dataset.id;
            let indexOfCurrentQuestion = original.indexOf(questions.find(item => item._id === cardId));
            original[indexOfCurrentQuestion].alreadyAnswered = true;
            localStorage.setItem(topic, JSON.stringify(original));

            //Score Card (this makes sure that there's only one score card at the end)
            if (currentCard + 1 == questions.length) {
                numberOfScoreCard += 1;
                if (numberOfScoreCard <= 1) ScoreCard();
                scroll();
                return;
            }

            userAnswer = "";
            correctAnswer = "";
            currentCard += 1;
            selectAnswer();
            updateDisplay();
            scroll();
        } else {
            explanationWrapper.style.display = "block";
            checkAnswerIfCorrect();
            answeredQuestions += 1;
            updateDisplay();
        }
    }
});

//Scroll to the next card
function scroll() {
    const cardWidth = slider.querySelector(".card").offsetWidth;
    const scrollDistance = cardWidth + slider.scrollLeft;
    slider.scrollTo({
        left: scrollDistance,
        behavior: "smooth" // Optional: for smooth scrolling
    });
}

//Allow user to select an answer
function selectAnswer() {
    cards = slider.querySelectorAll(".card");
    options = cards[currentCard].querySelector(".options");

    if (questions.length == 0) return;
    options.addEventListener("click", e => {
        const target = e.target;
        let selectedOption = options.querySelector(".selected");
        if (selectedOption) selectedOption.classList.remove("selected");
        target.classList.add("selected");

        userAnswer = options.querySelector(".selected").dataset.option;
        correctAnswer = questions[currentCard].correctAnswer[0].toUpperCase();
        //optionSelectionSfx.play();
    });
}

//This checks if the user's answer is correct
function checkAnswerIfCorrect() {
    let explanationWrapper = cards[currentCard].querySelector(
        ".explanation-wrapper"
    );
    if (userAnswer.toUpperCase() == correctAnswer) {
        score += 1;
        //Set the question to answeredCorrectly = treu
        let cardId = cards[currentCard].dataset.id;
        let indexOfCurrentQuestion = original.indexOf(questions.find(item => item._id === cardId));
        original[indexOfCurrentQuestion].answeredCorrectly = true;
        localStorage.setItem(topic, JSON.stringify(original));
        //localStorage.setItem("score", score);
        explanationWrapper.querySelector(".top-bar").style.backgroundColor =
            "#18ba59";
    } else {
        explanationWrapper.querySelector(".top-bar").style.backgroundColor =
            "#d62b2b";
    }

    updateDisplay();
}


//This only updates the displays such as the remaining questions
function updateDisplay() {
    remainingQuestionsDisplay.innerText = `Questions: ${answeredQuestions}/${questions.length}`;
}

//This add a new card question to the slider
function AddNewCard(item) {
    let n = "option" + item.correctAnswer.toUpperCase();
    let text = `
	<div class="card" data-id="${item._id}">
		<div class="question">
			<h4>Q. ${item.question}</h4>
		</div>
		<div class="options">
			<div class="option" data-option="a">A. ${item.optionA}</div>
			<div class="option" data-option="b">B. ${item.optionB}</div>
			<div class="option" data-option="c">C. ${item.optionC}</div>
			<div class="option" data-option="d">D. ${item.optionD}</div>
		</div>
		<div class="explanation-wrapper">
			<div class="top-bar"></div>
			<div class="correct-answer">
				<p>Correct Answer: </p>
				<p>${item.correctAnswer}</p>
			</div>
			<div class="explanation">
				<p>Explanation</p>
				<div class="mid-bar"></div>
				<div class="text">
					<p>${item.explanation}</p>
				</div>
			</div>
		</div>
	</div>`;

    slider.insertAdjacentHTML("beforeend", text);
}

//This is the card at the end that displays the total score
function ScoreCard() {
    let text = `
		<div class="card score-card">
			<div>
				<p class="title">Thankyou for Playing!</p>
			</div>
			<div>
				<p>Total Score: ${score}</p>
				<button onclick="backToHome()" class="back-to-home-btn"><i class="fa-solid fa-house"></i> Home</button>
			</div>
		</div>
	`;

    slider.insertAdjacentHTML("beforeend", text);
    nextButton.style.display = "none";
}

function backToHome() {
    window.location.href = "index.html";
    clickSfx.play();
}

function closeSelectAnswerDisplay() {
    selectAnswerErrorDisplay.style.display = "none";
}
