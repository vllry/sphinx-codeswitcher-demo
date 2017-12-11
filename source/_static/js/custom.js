function unHide() {
	var boxes = document.getElementsByClassName('golang');
	console.log(boxes);
	console.log(boxes.length);
	for (var i = 0; i < boxes.length; i++) {
	    console.log(boxes[i]);
	    boxes[i].classList.remove("hidden");
	}
}

document.addEventListener("DOMContentLoaded", function(e) {unHide()})
