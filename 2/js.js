const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let box = 100;
let dir;
let flag = true;

let road = [];
road[0] = {
	x: 0,
	y: 0,
}

document.addEventListener('keydown', function(event) {
	document.getElementById("keyUp").classList.remove('highlight');
	document.getElementById("keyLeft").classList.remove('highlight');
	document.getElementById("keyRight").classList.remove('highlight');
	document.getElementById("keyDown").classList.remove('highlight');

	if (event.code == 'KeyW') {
		console.log("Up");
		dir = "up";		
		highlight(document.getElementById("keyUp"));
	}
	else if (event.code == 'KeyA') {
		console.log("left");
		dir = "left";
		highlight(document.getElementById("keyLeft"));
	}
	else if (event.code == 'KeyD') {
		console.log("right");
		dir = "right";
		highlight(document.getElementById("keyRight"));
	}
	else if (event.code == 'KeyS') {
		console.log("down");
		dir = "down";
		highlight(document.getElementById("keyDown"));
	}
	
	if (flag) drawGame();
	else {
		ctx.reset();
		road = [];
		road[0] = {
			x: 0,
			y: 0,
		}
		flag = true;
	}
});

function drawGame() {
	let roadX = road[0].x;
	let roadY = road[0].y;

	if (roadX > 600 || roadY > 600) {
		flag = false;
		return flag;
	}
	if (roadX < 0) {
		alert("Вихід за межі поля!");
		roadX += box;
	}
	if (roadY < 0) {
		alert("Вихід за межі поля!");
		roadY += box;
	} else {
		for(let i = 0; i < road.length; i++) {
			ctx.fillStyle = "blue";
			ctx.fillRect(road[i].x, road[i].y, box, box);		
		}
	}

	if (dir == "left") roadX -= box;
	if (dir == "right") roadX += box;
	if (dir == "up") roadY -= box;
	if (dir == "down") roadY += box;

	let newHead = {
		x: roadX,
		y: roadY
	};

	road.unshift(newHead);	
}

function highlight(elem) {
	selectKey = elem;
	selectKey.classList.add('highlight');
}
