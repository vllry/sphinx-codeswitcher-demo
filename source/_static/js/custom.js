function setLangTo(lang) {
	var langSnipBoxes = document.getElementsByClassName("langsnips");
	for (var i = 0; i < langSnipBoxes.length; i++) {
		var boxes = langSnipBoxes[i].getElementsByTagName("*");
		console.log(boxes);
		for (var j = 0; j < boxes.length; j++) {
			console.log(boxes[j]);
			if (boxes[j].classList.contains(lang)) {
				boxes[j].classList.remove("hidden");
			}
			else {
				boxes[j].classList.add("hidden");
			}
		}
	}
}

function hideAllLangSnips() {
	setLangTo("NOLANG");  // Should pick a default.
}

function createLangButton(container, snipbox, lang) {
	console.log("createLangButton");
	var button = document.createElement("button");
	button.innerHTML = lang;
	button.addEventListener ("click", function() {
	  setLangTo(lang);
	});

	container.insertBefore(button, snipbox);
}

function createAllLangButtons() {
	var langSnipBoxes = document.getElementsByClassName("langsnips");
	var numLangSnipBoxes = langSnipBoxes.length;
	for (var i = 0; i < numLangSnipBoxes; i++) {
		var boxes = langSnipBoxes[i].getElementsByTagName("*");
		var numBoxes = boxes.length;
		for (var j = 0; j < numBoxes; j++) {
			for (var k = 0; k < boxes[j].classList.length; k++) {
				if (boxes[j].classList[k].startsWith("lang-")) {
					console.log(boxes[j].classList[k]);
					createLangButton(
						langSnipBoxes[i],
						boxes[j],
						boxes[j].classList[k]
					);
				}
			}
		}
	}
}

document.addEventListener("DOMContentLoaded", function(e) {hideAllLangSnips()})
document.addEventListener("DOMContentLoaded", function(e) {createAllLangButtons()})

