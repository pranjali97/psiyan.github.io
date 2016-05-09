function modStatus() {
	window.status = "Stuck in a browser factory!";
}

function hw() {
	alert("Hello, world!");
}

function pow() {
	var a = "HELLO WORLD";
	alert(a.split(" ")[1]);
}

function plow() {
	var a = "HELLO WORLD";
	alert(a.toLowerCase());
}

function boxPrompt() {
	var box = document.getElementById("ttbox");
	box.value = prompt(box.value + "?");
}

function getUA() {
	document.getElementById("uaspan").innerHTML = navigator.userAgent;
}

function autoInvoke() {
	getUA();
}