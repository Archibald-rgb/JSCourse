var number = []; // четыре цифры нашего числа
var attempts = 0; // число попыток
var showPrevStep = "";//строка с запросом на вывод лога предыдущих ходов
var answers = [];//массив с массивами быков и коров
var userNum = [];//массив с ответами игрока

generateNumber(); //сгенерировали неповторяющиеся значения массива
alert(number.join(''));//преобразование массива в строку
guessNumber();

function generateNumber() {
	var min = 1;
	var max = 9;

	// заполняем массив цифр в числе
	for (var i = 0; i < 4; i++) {
		var part = Math.round(Math.random() * (max - min) + min); //5

		// первое число всегда уникально
		if (i == 0) {
			number[0] = part;
		}
		else { // пока не сгенерируется уникальное число, генерируем новые случайные числа
			while (number.indexOf(part) != -1) {//элемент найден
				part = Math.round(Math.random() * (max - min) + min);
			}

			number[i] = part;
		}
	}
}

function guessNumber() {
	var result = prompt("Введите число (-1 - закончить игру" + showPrevStep + ")", 0);
	var gameIsRunning = true;//проверка на то, что игра идет
	var showStep = false;

	// пока игрок не угадал число
	while (gameIsRunning) {
		// выход из игры
		if (parseInt(result) == -1) {
			gameIsRunning = false;
		}
		//запрос на показ предыдущего хода
		else if (parseInt(result) == -2 && attempts >= 1) {
			//запрашиваем номер хода
			result = prompt("Введите номер хода от 1 до " + attempts + " или (-1 - закончить игру)", 0);
			//если ответ -1 выходим из условия в начало мэйн цикла
			if (parseInt(result) == -1) {
				continue;
			}
			//если ответ не число или или не коректен количеству ходов, то новый запрос ответа и выход в начало мэйн цикла
			else if (parseInt(result) <= 0 || isNaN(parseInt(result)) || parseInt(result) > attempts) {
				alert("Вы не ввели не верное число");
				// запрашиваем по новой
				result = prompt("Введите число (-1 - закончить игру" + showPrevStep + ")", 0);
				continue;
			}
			//если введенное число подходит по параметрам то выводим данные и запрашиваем новый ответ или запрос на показ лога
			else {
				var index = +result;
				result = prompt("Номер хода: " + index + " Ответ: " + userNum[index - 1] + " Быки: " + answers[index - 1][1] + " Коровы: " + answers[index - 1][2] + " Введите число (-1 - закончить игру" + showPrevStep + ")", 0);
				continue;
			}
		}
		// игрок ввел некорректные данные
		else if (parseInt(result) == 0 || isNaN(parseInt(result))) {
			alert("Вы не ввели число");
			// запрашиваем по новой
			result = prompt("Введите число (-1 - закончить игру" + showPrevStep + ")", 0);
		}
		// проверяем число
		else {
			var answer = checkNumber(result);//answer[false,1,1]
			if (answer[0]) {
				// число угадано
				alert("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts);
				// останавливаем игру
				gameIsRunning = false;
			}
			else {
				// следующий ход
				result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру" + showPrevStep + ")", 0);
			}
		}
	}
}

function checkNumber(myresult) {//1234


	//"1234".split('') => [1234]


	// каждая проверка увеличивает кол-во попыток на 1
	attempts++;
	showPrevStep = " или -2 показать предыдущий ход";
	// массив результата
	// 0 - общий результат
	// 1 - быки
	// 2 - коровы
	var answer = [false, 0, 0];

	// раскладываем число на разряды
	console.log(myresult);
	console.log(number);

	/*s = "1, 2, 3, 4";
	mas = s.split(", ")
	*/


	var ranks = myresult.split("");//массив, полученный из введенного числа

	for (var i = 0; i < ranks.length; i++) {
		// если по индексу значения совпадают, то это бык
		if (parseInt(ranks[i]) == number[i]) {
			answer[1]++;
		}
		// если число вообще есть в массиве, то это корова
		else if (number.indexOf(parseInt(ranks[i])) != -1) {
			answer[2]++;
		}
	}

	// если набралось 4 быка, то это победа
	if (answer[1] == 4) {
		answer[0] = true;
	}
	answers.push(answer);
	userNum.push(myresult);
	return answer;
}