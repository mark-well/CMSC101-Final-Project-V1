let startButton = document.getElementById("startButton");
let settingsIcon = document.querySelector(".settings-icon");

//Sound Effects
var clickSfx = new Howl({src:['../../sfx/click-sfx.wav']});
var errorSfx = new Howl({src:['../../sfx/error-sfx.wav']});

startButton.addEventListener("click", () => {
	window.location.href = "main.html";
	let selectElement = document.getElementById("numberOfQuestionsInput");
	localStorage.removeItem("numberOfQuestionsInput");
	var selectedIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
	localStorage.setItem("numberOfQuestionsInput", selectedText);
	clickSfx.play();
});

settingsIcon.addEventListener("click", () => {
	clickSfx.play();
});