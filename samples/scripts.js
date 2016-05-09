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

function powalt() {
	var a = "HELLO WORLD";
	alert(a.slice(6));
}

function plow() {
	var box = document.getElementById("casebox");
	box.value = box.value.toLowerCase();
}

function boxPrompt() {
	var box = document.getElementById("ttbox");
	box.value = prompt(box.value + "?");
}

function getUA() {
	document.getElementById("uaspan").innerHTML = navigator.userAgent;
}

function lc() {
	var a = "HELLO WORLD";
}

function autoInvoke() {
	getUA();
}