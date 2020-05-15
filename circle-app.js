var ol = 0;
var isPlaying = false;
var circleInterval;

var el = document.getElementById("circle");
var sc = 1;

function circleAnimation(time) {
	ol++;
	sc++;
	el.style.left = ol + "px";
	el.style.width = sc + "px";
	el.style.height = sc + "px";
	el.style.borderRadius = sc*100 + "px";
	circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
	if (isPlaying) {
		isPlaying = false;
		el.style.backgroundColor = "dimgrey";
        cancelAnimationFrame(circleInterval);
	} else {
		isPlaying = true;
		el.style.backgroundColor = "crimson";
		circleInterval = requestAnimationFrame(circleAnimation);
	}
}

el.addEventListener("click", mouseClicked);
el.style.backgroundColor = "dimgrey";
