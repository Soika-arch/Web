document.getElementById("button").onclick = function() { move() };
document.getElementById("icon_1").style.backgroundColor = '#bce8e7';
let count = 1;

function move() {
	for (let i = 1; i <= 9; i++) {
		document.getElementById(i).style.backgroundColor = '#fff';
	}
	let number = 0;

	number = Math.round(Math.random() * (6 - 1) + 1);
	console.log("number " + number);

	if (number === 1) { painting(5); }
	if (number === 2) { painting(1); painting(9); }
	if (number === 3) { painting(1); painting(5); painting(9); }
	if (number === 4) { painting(1); painting(3); painting(7); painting(9); }
	if (number === 5) { painting(1); painting(3); painting(5); painting(7); painting(9); }
	if (number === 6) { painting(1); painting(3); painting(4); painting(6); painting(7); painting(9); }

	if (count % 2 == 0) {
		document.getElementById("icon_2").style.backgroundColor = '#fff';
		document.getElementById("icon_1").style.backgroundColor = '#bce8e7';
		outputResult(2, number);
	}
	else {
		document.getElementById("icon_1").style.backgroundColor = '#fff';
		document.getElementById("icon_2").style.backgroundColor = '#bce8e7';
		outputResult(1, number);
	}
	count++;
}

function painting(id) {   //функція зафарбовує потрібний div-квадрат
	document.getElementById(id).style.backgroundColor = '#edb91c';
}

function outputResult(n, number) {    //функція виводить результат для ігрока n
	let res = document.querySelector('#res_'+ n);
	let li = document.createElement('li');
	li.textContent = number;
	res.appendChild(li);
}