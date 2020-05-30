let history = [];

/*Selectors*/
let color1 = document.querySelector("input[name='color1']");
let color2 = document.querySelector("input[name='color2']");
let body = document.querySelector("body");
let cssInput = document.querySelector("input.css");
let randomButton = document.querySelector("input[name='random']");
let backButton = document.querySelector("input[name='back']");

/*Methods*/
function changeBackground() {
	body.style.background="linear-gradient(90deg,"+color1.value+", "+color2.value+")";
	cssInput.value = body.style.background;
	history.push([color1.value,color2.value]);
}

function setRandomColors() {
	color1.value="#"+Math.floor(Math.random()*16777216).toString(16).padStart(6,"0");
	color2.value="#"+Math.floor(Math.random()*16777216).toString(16).padStart(6,"0");
	changeBackground();
}

function setPreviousBackground() {
	history.pop();
	let previousColor = history[history.length-1];
	if (previousColor) {
		color1.value=previousColor[0];
		color2.value=previousColor[1];
		body.style.background="linear-gradient(90deg,"+color1.value+", "+color2.value+")";
		cssInput.value = body.style.background;
	}
}

/*Events, Initialize*/
changeBackground();

color1.addEventListener("input",changeBackground);
color2.addEventListener("input",changeBackground);
randomButton.addEventListener("click",setRandomColors);
backButton.addEventListener("click",setPreviousBackground);
