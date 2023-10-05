document.getElementById("button_on").onclick = function() { myFunction(1) };
document.getElementById("button_of").onclick = function() { myFunction(2) };

function myFunction(status) {
	let res = document.querySelector('img');
	if (status == 1) res.setAttribute('src', 'https://all-psd.ru/uploads/posts/2011-05/psd-glossy-orange-light-bulb.jpg');
	if (status == 2) res.setAttribute('src', 'https://all-psd.ru/uploads/posts/2011-05/psd-light-bulb-icon.jpg');
}





