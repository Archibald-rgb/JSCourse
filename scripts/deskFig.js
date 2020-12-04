function ChessDesk(className) {
	this.desk = document.querySelector('.' + className);
	if (this.desk == null) {
		console.log('error, class name is not exist');
		return {};
	}
	document.body.style.fontSize = document.body.clientWidth / 100 + 'px';
	this.desk.style.width = document.body.clientWidth / 100 * 40 + 'px';
	this.desk.style.height = document.body.clientWidth / 100 * 40 + 'px';


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

		//отличия от предыдущего скрипта меняем буквы на коды шахматных фигур
		var figuresWhite = {
			'a1': '♖', 'b1': '♘', 'c1': '♗', 'd1': '♔', 'e1': '♕', 'f1': '♗', 'g1': '♘', 'h1': '♖',
			'a2': '♙', 'b2': '♙', 'c2': '♙', 'd2': '♙', 'e2': '♙', 'f2': '♙', 'g2': '♙', 'h2': '♙'
		};
		var figuresBlack = {
			'a8': '♜', 'b8': '♞', 'c8': '♝', 'd8': '♚', 'e8': '♛', 'f8': '♝', 'g8': '♞', 'h8': '♜',
			'a7': '♟', 'b7': '♟', 'c7': '♟', 'd7': '♟', 'e7': '♟', 'f7': '♟', 'g7': '♟', 'h7': '♟'
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
						elem.classList.add('whitef');
					}

				}
				for (var key in figuresBlack) {
					if (key == pos) {
						elem.innerHTML = figuresBlack[key];
						elem.classList.add('blackf');
					}

				}



				element.append(elem);
			}

		}

	}

}


chessDesk = new ChessDesk('chess-alphaf');
