export default class Label {
	#debugLabel;
	#currentElement;
	#originalPositioning;
	#originalZIndex;


	constructor() {
		this.#debugLabel = document.createElement('div');
		this.#debugLabel.classList.add("debug-label");
	}


	update(element) {
		if (element === this.#currentElement) return;

		if (this.#currentElement) {
			this.#currentElement.style.position = this.#originalPositioning;
			this.#currentElement.style.zIndex = this.#originalZIndex;
		}

		this.#currentElement = element;

		let elementPosition = this.#originalPositioning = element.style.position;
		let elementDisplay = element.style.display;
		this.#originalZIndex = element.style.zIndex;

		console.log("element.style.display: " + element.style.display);
		console.log("element.style.position: " + element.style.position);

		// Only set 'position: relative' if necessary
		if (elementPosition !== "relative" && elementPosition !== "absolute" && elementDisplay !== "flex" && elementDisplay !== "inline-flex") {
			element.style.position = "relative";
			if (!element.style.zIndex) {
				element.style.zIndex = -1;
			}
		}



		element.appendChild(this.#debugLabel);
	}


	disable() {
		if (this.#currentElement) {
			this.#currentElement.style.position = this.#originalPositioning;
			this.#currentElement.style.zIndex = this.#originalZIndex;
		}
		this.#debugLabel?.remove();
	}
}