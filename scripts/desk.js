function ChessDesk(className) {
	this.desk = document.querySelector('.' + className);
	if (this.desk == null) {
		console.log('error, class name is not exist');
		return {};
	}
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
				// elem.innerHTML = i + alphaBet[j - 1];
				element.append(elem);
			}

		}

	}

}


chessDesk = new ChessDesk('chess-desk');
console.dir(document.body);