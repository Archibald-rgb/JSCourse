function ChessDesk(className) {
	this.desk = document.querySelector('.' + className);
	if (this.desk == null) {
		console.log('error, class name is not exist');
		return {};
	}
	document.body.style.fontSize = document.body.clientWidth / 100 + 'px';
	this.desk.style.width = document.body.clientWidth / 100 * 40 + 'px';
	this.desk.style.height = document.body.clientWidth / 100 * 40 + 'px';
	this.field = [[], [], [], [], [], [], [], []];

	for (var i = 1; i <= 3; i++) {
		var sides = ['top', ['left', 'tiles', 'right'], 'bottom'];
		switch (i) {
			case 1:
			case 3:
				var elem = document.createElement("div");
				elem.className = className + "__" + sides[i - 1];
				navBar(className, sides[i - 1], elem);
				this.desk.append(elem);
				break;
			case 2:
				var row = document.createElement("div");
				row.className = className + "__" + "row";
				for (var j = 1; j <= 3; j++) {
					switch (j) {
						case 1:
						case 3:
							var elem = document.createElement("div");
							elem.className = className + "__" + sides[i - 1][j - 1];
							navBar(className, sides[i - 1][j - 1], elem);
							row.append(elem);
							break;
						case 2:
							var elem = document.createElement("div");
							elem.className = className + "__" + "tiles";
							tiles(className, elem);
							row.append(elem);
							break;
					}
				}
				this.desk.append(row);
				break;
		}

	}

	function navBar(parentClass, side, element) {
		var alphaBet = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
		switch (side) {
			case 'top':
			case 'bottom':
				for (var i = 8; i >= 1; i--) {
					var elem = document.createElement("div");
					elem.className = parentClass + "__" + "alpha";
					elem.innerHTML = alphaBet[i - 1];
					element.append(elem);
				}
				break;
			case 'left':
			case 'right':
				for (var i = 8; i >= 1; i--) {
					var elem = document.createElement("div");
					elem.className = parentClass + "__" + "num";
					elem.innerHTML = i;
					element.append(elem);
				}
				break;
		}

	}

	function tiles(parentClass, element) {
		var alphaBet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		var figuresWhite = {
			a1: 'Л', b1: 'Кн', 'c1': 'С', 'd1': 'Кр', 'e1': 'Ф', 'f1': 'С', 'g1': 'Кн', 'h1': 'Л',
			'a2': 'п', 'b2': 'п', 'c2': 'п', 'd2': 'п', 'e2': 'п', 'f2': 'п', 'g2': 'п', 'h2': 'п'
		};
		var figuresBlack = {
			'a8': 'Л', 'b8': 'Кн', 'c8': 'С', 'd8': 'Кр', 'e8': 'Ф', 'f8': 'С', 'g8': 'Кн', 'h8': 'Л',
			'a7': 'п', 'b7': 'п', 'c7': 'п', 'd7': 'п', 'e7': 'п', 'f7': 'п', 'g7': 'п', 'h7': 'п'
		}
		var classPref = '';
		for (var i = 8; i >= 1; i--) {
			for (var j = 1; j <= 8; j++) {
				if (i % 2 == 0) {
					if (j % 2 == 0) {
						classPref = 'black';
					}
					else {
						classPref = 'white';
					}
				}
				else {
					if (j % 2 == 0) {
						classPref = 'white';
					}
					else {
						classPref = 'black';
					}
				}
				var elem = document.createElement("div");
				elem.className = parentClass + "__" + "tile-" + classPref;
				var pos = alphaBet[j - 1] + i;
				console.log(pos);
				for (var key in figuresWhite) {
					if (key == pos) {
						elem.innerHTML = figuresWhite[key];
						elem.classList.add('white');
					}

				}
				for (var key in figuresBlack) {
					if (key == pos) {
						elem.innerHTML = figuresBlack[key];
						elem.classList.add('black');
					}

				}



				element.append(elem);
			}

		}

	}

}


chessDesk = new ChessDesk('chess-alpha');
