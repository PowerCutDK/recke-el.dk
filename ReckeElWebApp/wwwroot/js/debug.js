//import Label from './debuglabel.js';

let gridIsOn = false;
let hoverElement;
//let debugOverlay = document.createElement('div');
//debugOverlay.id = "debug-overlay";
//const label = new Label();

function toggleDebug() {
	if (!gridIsOn) {
		document.body.classList.add("debug-enabled");
		gridIsOn = true;
		//document.body.appendChild(debugOverlay);
		window.addEventListener("mouseover", onMouseOver);

		// Get the current element under the mouse
		let mouseOverElements = document.querySelectorAll(":hover");
		let mouseOverElement = mouseOverElements[mouseOverElements.length - 1];
		onMouseOver({ target: mouseOverElement });
	}
	else {
		document.body.classList.remove("debug-enabled");
		gridIsOn = false;
		//debugOverlay.remove();
		window.removeEventListener("mouseover", onMouseOver);	}
}

window.addEventListener("keydown", event => {
	if (event.key.toLowerCase() === "x") {
		toggleDebug();
	}
});

function onMouseOver(event) {
	hoverElement?.classList.remove("debug-hover");
	hoverElement = event.target;
	const selectorString = getSelectorString(hoverElement);
	console.log(selectorString);
	hoverElement.classList.add("debug-hover");
	//label.update(hoverElement);
}

function getSelectorString(element) {
	const tag = element.tagName.toLowerCase();
	const id = element.id ? "#" + element.id : "";
	const classes = element.className ? "." + element.className.replace(" ", ".") : "";
	return tag + id + classes;
}
