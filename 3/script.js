var images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
var slider = document.querySelector('.slider-box').children[1];
var sliderView = slider.children[1].children[0];
slider.children[0].onclick = changeSlide;
slider.children[2].onclick = changeSlide;

function changeSlide() {
	var direction = this.className.split('__');
	direction = direction[1];
	switch (direction) {
		case 'left':
			var img = images.shift();
			images.push(img);
			sliderView.src = images[0];
			break;
		case 'right':
			var img = images.pop();
			images.unshift(img);
			sliderView.src = images[0];
			break;
	}
}