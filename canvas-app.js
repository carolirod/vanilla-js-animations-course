var canvas = document.getElementById('animated-canvas');
var context = canvas.getContext('2d');

var canvasInterval = requestAnimationFrame(canvasAnimation);
var circleX = 60;

var velocity = 1;
var accelaration = 0.5;

var posY = canvas.height / 2;

function makeRandom(n) {
	return Math.floor(Math.random() * Math.floor(n));
}

function canvasAnimation(){
    circleX++;
	// drawCircle(circleX, canvas.height / 2, 25);
	// drawCircle(makeRandom(circleX), makeRandom(canvas.height) / 2, 25);
	drawCircle(circleX, posY, 25);
	canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s) {
	// to clear the context
	// clearCanvas();
	context.globalCompositeOperation = "screen"; // "difference";

    context.fillStyle = "lightblue";
	context.beginPath();
	// arc (x position, y position, radius 25, start angle, end angle,
    // context.arc(90, canvas.height / 2, 25, 0, 2 * Math.PI);
    // context.arc(90, canvas.height / 2, 25, Math.PI, 2 * Math.PI);
    context.arc(x, y, s, 0, 2 * Math.PI);
	context.fill();

	velocity += accelaration;
	circleX += velocity;

	if(circleX > canvas.width){
        circleX = makeRandom(circleX);
		velocity = makeRandom(3);
		posY = makeRandom(canvas.height);
    }
}

function clearCanvas() {
	// wipe out canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
}


drawCircle();
