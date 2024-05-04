let startButton = document.getElementById("startButton");
let settingsIcon = document.querySelector(".settings-icon");

//Sound Effects
var clickSfx = new Howl({src:['./sfx/click-sfx.wav']});
var errorSfx = new Howl({src:['./sfx/error-sfx.wav']});

startButton.addEventListener("click", () => {
	window.location.href = "main.html";
	clickSfx.play();
});

settingsIcon.addEventListener("click", () => {
	clickSfx.play();
});