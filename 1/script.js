function init() {
	var smallImg = document.querySelectorAll('.small');
	for (var i = 0; i < smallImg.length; i++) {
		smallImg[i].onclick = showBig;
	}
}
function showBig(image) {
	var bigImg = document.querySelector('.big');
	var path = image.target.src.split('/');
	path[path.length - 2] = 'big';
	if (bigImg) {
		bigImg.onerror = err;
		bigImg.src = path.join('/');

	}
	else {
		console.log('Some error arised');
	}
}
function err() {
	var errScreen = this;
	errScreen.src = 'img/error.jpeg';
}

init();