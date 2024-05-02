let slider = document.querySelector(".slider");
let nextButton = document.querySelector(".next-btn");
let cards = slider.querySelectorAll(".card");
let scoreDisplay = document.querySelector(".score-display");
let remainingQuestionsDisplay = document.querySelector(".remaining-question-display");
let numberOfScoreCard = 0;
let currentCard = 0;
let userAnswer = "";
let correctAnswer = "";
let score = 0;
let answeredQuestions = 1;

let questions = questionsData.data;
//Load all the questions
for(let i = 0; i < questions.length; i++) {
	let item = questions[i];
	
	if(item.alreadyAnswered) {
		answeredQuestions += 1;
		continue;
	}
	
	updateDisplay();
	AddNewCard(item);
}

selectAnswer(); //Ask the user to select an answer first
nextButton.addEventListener("click", () => {
    let explanationWrapper = cards[currentCard].querySelector(".explanation-wrapper");
    if(userAnswer == ""){
    	selectAnswer();
    	alert("Please select an answer");
    }else{
    	if(explanationWrapper.style.display == "block"){
    		if(currentCard+1 == questions.length){
    			numberOfScoreCard += 1;
    			if(numberOfScoreCard <= 1) ScoreCard();
    			scroll();
    			return;
    		}
    		
    		userAnswer = "";
    		correctAnswer = "";
    		currentCard += 1;
    		answeredQuestions += 1;
    		selectAnswer();
    		updateDisplay();
    		scroll();
    	} else {
    		explanationWrapper.style.display = "block";
    		checkAnswerIfCorrect();
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

    options.addEventListener("click", e => {
        const target = e.target;
        let selectedOption = options.querySelector(".selected");
        if (selectedOption) selectedOption.classList.remove("selected");
        target.classList.add("selected");
    	
    	userAnswer = options.querySelector(".selected").dataset.option;
    	correctAnswer = questions[currentCard].correctAnswer[0].toUpperCase();
    });
}

function checkAnswerIfCorrect(){
	let explanationWrapper = cards[currentCard].querySelector(".explanation-wrapper");
	if(userAnswer.toUpperCase() == correctAnswer) {
		score += 1;
		explanationWrapper.querySelector(".top-bar").style.backgroundColor = "#18ba59";
	} else {
		explanationWrapper.querySelector(".top-bar").style.backgroundColor = "#d62b2b";
	}
	
	updateDisplay();
}

function updateDisplay() {
	remainingQuestionsDisplay.innerText = `Questions: ${answeredQuestions}/${questions.length}`;
	scoreDisplay.innerText = `Total Score: ${score}`;
	
}

function AddNewCard(item){
	let n = "option" + item.correctAnswer.toUpperCase();
	let text = `
	<div class="card">
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
	
	slider.insertAdjacentHTML('beforeend', text);
}

function ScoreCard(){
	let text = `
		<div class="card score-card">
			<div>
				<p>Thankyou for Playing!</p>
			</div>
			<div>
				<p>Total Score: ${score}</p>
				<a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
			</div>
		</div>
	`;
	
	slider.insertAdjacentHTML('beforeend', text);
}