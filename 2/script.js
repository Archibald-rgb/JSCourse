var products = [{
	id: 0,
	name: 'товар 1',
	desk: 'Lorem ipsum dolor sit amet consectetur',
	price: 905,
	image: 'img/image1.jpg',
},
{
	id: 1,
	name: 'товар 2',
	desk: 'Lorem ipsum dolor sit amet consectetur',
	price: 1000,
	image: 'img/image2.jpg',
},
{
	id: 2,
	name: 'товар 3',
	desk: 'Lorem ipsum dolor sit amet consectetur',
	price: 1500,
	image: 'img/image3.jpg',
},
];
var tableClasses = ['item-cart__count', 'item-cart__img', 'item-cart__name', 'item-cart__price rub'];
var cart = [];
var productBox = '.shop__cards';
var cartBox = '.cart__objects'
function makeCard(product) {
	var box = document.querySelector(productBox);
	var container = document.createElement('div');
	container.className = 'shop__card card';
	container.id = product.id;

	var image = document.createElement('img');
	image.className = 'card__item-image';
	image.src = product.image;

	var price = document.createElement('div');
	price.className = 'card__item-price';
	price.classList.add('rub');
	price.innerHTML = product.price;

	var desk = document.createElement('div');
	desk.className = 'card__item-desk';
	desk.innerHTML = product.desk;

	var butt = document.createElement('button');
	butt.className = 'card__butt';
	butt.innerHTML = 'В корзину';
	butt.id = product.id;
	butt.onclick = buy;

	container.append(image);
	container.append(price);
	container.append(desk);
	container.append(butt);
	return container;
}

function makeTableRow(id) {
	var tr = document.createElement('tr');
	tr.className = 'cart__item item-cart'
	var product = products.find(item => item.id == id);
	var tableBox = document.querySelector('tbody');
	var total = document.querySelector('.cart__total');
	cart.push(product.price);
	for (var i = 0; i < 4; i++) {
		var td = document.createElement('td');
		td.className = tableClasses[i];
		switch (i) {
			case 0:
				td.innerHTML = cart.length;
				break;
			case 1:
				var img = document.createElement('img');
				img.src = product.image;
				img.style.width = '60px';
				img.style.height = '35px';
				td.append(img);
				break;
			case 2:
				td.innerHTML = product.name;
				break;
			case 3:
				td.innerHTML = product.price;
				break;
		}
		tr.append(td);
	}
	tableBox.insertBefore(tr, total);
	total.children[3].innerHTML = cart.reduce((summ, price) => summ += +price);
}

function buy() {
	makeTableRow(this.id);
}

function init() {
	var container = document.querySelector(productBox);
	for (var i = 0; i < 3; i++) {
		container.append(makeCard(products[i]));
	}
}

init();