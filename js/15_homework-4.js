/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function () {
		personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?");
		while (
			personalMovieDB.count === "" ||
			personalMovieDB.count == null ||
			isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = prompt(
				"Сколько фильмов вы уже посмотрели?",
			);
		}
	},
	detectPersonalLvl: function () {
		if (personalMovieDB.count < 10) {
			alert("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			alert("Вы киноман!");
		} else {
			alert("Ошибка!");
		}
	},
	rememberMyMovies: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Один из последних просмотренных фильмов?").trim(),
				b = prompt("На сколько оцените его?").trim();
			/* метод trim ставим чтобы пользователь не мог ввести одни пробелы и это засчиталось бы за ответ */
			if (a == "" || b == "" || a == null || b == null || a.length > 50) {
				i--;
				console.log("error");
			} else {
				personalMovieDB.movies[a] = b;
			}
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if (genre == null || genre == "") {
				i--;
				alert("Вы ввели ввели неверные данные или отменили действие!");
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}

		personalMovieDB.genres.forEach(function (item, i, arr) {
			console.log(
				`Любимый жанр под номером ${
					i + 1
				} - это ${item} из массива ${arr}`,
			);
		});

		// for (let i = 0; i < personalMovieDB.genres.length; i++) {
		// 	console.log(
		// 		`Любимый жанр под номером ${i + 1} - это ${
		// 			personalMovieDB.genres[i]
		// 		} из массива ${personalMovieDB.genres}`,
		// 	);

		//  МОЖНО ИСПОЛЬЗОВАТЬ И ТАКОЙ ЦИКЛ  }
	},
	showMyDB: function () {
		if (personalMovieDB.privat) {
			console.log("Приватно");
		} else {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
};

personalMovieDB.writeYourGenres();

/* Задача:

Задача:

    У вас есть список учеников, которые хотят поиграть в игру:

    const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека.Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту.Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.Эти группы должны быть массивами.Как итог, функция возвращает новый массив с тремя командами и строкой как 4 й элемент.

Пример:

    sortStudentsByGroups(students) =>

    [
        ['Andrew', 'Ann', 'Bernard'],
        ['Cris', 'Josh', 'Mark'],
        ['Peter', 'Sam', 'Sandra'],
        'Оставшиеся студенты: Takesi'
    ]
Если убрать одно студента из списка, то результат будет:

    [
        ['Andrew', 'Ann', 'Bernard'],
        ['Cris', 'Josh', 'Mark'],
        ['Peter', 'Sam', 'Sandra'],
        'Оставшиеся студенты: -'
    ]
А если добавить одного, то:

    [
        ['Andrew', 'Ann', 'Bernard'],
        ['Cris', 'Josh', 'Mark'],
        ['Peter', 'Sam', 'Sandra'],
        'Оставшиеся студенты: Takesi, Somebody'
    ]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.Просто распишите логику действий строка за строкой.*/

const students = [
	"Peter",
	"andrew",
	"Baba",
	"Ann",
	"Mark",
	"Josh",
	"Sandra",
	"Cris",
	"Bernard",
	"takeda",
	"kenshi",
];

function sortStudentsByGroups(arr) {
	arr.sort();

	let a = [];
	let b = [];
	let c = [];
	let rest = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < 3) {
			a.push(arr[i]);
		} else if (i < 6) {
			b.push(arr[i]);
		} else if (i < 9) {
			c.push(arr[i]);
		} else {
			rest.push(arr[i]);
		}
	}

	return [a, b, c, rest.join(", ")];
}

console.log(sortStudentsByGroups(students));
