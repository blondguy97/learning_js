/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

function start() {
	let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
	while (
		numberOfFilms === "" ||
		numberOfFilms == null ||
		isNaN(numberOfFilms)
	) {
		numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
	}

	return numberOfFilms;
}

let personalMovieDB = {
	count: start(),
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function detectPersonalLvl() {
	if (personalMovieDB.count < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		alert("Вы киноман!");
	} else {
		alert("Ошибка!");
	}
}

function rememberMyMovies() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Один из последних просмотренных фильмов?"),
			b = prompt("На сколько оцените его?");
		a.trim();
		b.trim();
		/* метод trim ставим чтобы пользователь не мог ввести одни пробелы и это засчиталось бы за ответ */
		if (a == "" || b == "" || a == null || b == null || a.length > 50) {
			i--;
			console.log("error");
		} else {
			personalMovieDB.movies[a] = b;
		}
	}
}

/* Аналог цикла в функции rememberMyMovies();

let i = 0;

while (i < 2) {
    let a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');

    i++;
    if (a == '' || b == '' || a == null || b == null || a.length > 50) {
        i--;
    }
    else {
        personalMovieDB.movies[a] = b;
    }
} */

function showMyDB(hidden) {
	if (!hidden) {
		// идем от обратного, то есть если база данных НЕ скрыта, то мы ее показываем, если наоборот то
		console.log(personalMovieDB);
	} else {
		console.log("Приватно");
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(
			"Ваш любимый жанр под номером  " + i,
		);
	}
}

writeYourGenres();

/* Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

*/

function findMaxNumber(a, b, c, d) {
	if (
		typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number"
	) {
		let more = Math.max(a, b, c, d);
		return `Самое большое число из: ${a}, ${b}, ${c} и ${d} - это ${more}`;
	} else {
		return 0;
	}
}
console.log(findMaxNumber(2, 22, 21, 8));

/* Подробнее про метод у строк trim()

Метод trim() удаляет пробельные символы с начала и конца строки.

*/

console.log(" I love spaces  ".trim()); // То есть в этом случае если пользователь где то введет только одни пробелы, либо придет некорректный ответ от сервера, то нигде это не засчитается, будет считаться что тут НИЧЕГО, пустая строка (а в js надо помнить, то если в строке хоть пробел есть Это УЖЕ НЕ пустая строка)
