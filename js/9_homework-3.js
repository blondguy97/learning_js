/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}

// start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    }
    else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    }
    else {
        alert('Ошибка!');
    }
}

// detectPersonalLvl();


function rememberMyMovies() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
        a.trim();
        b.trim();
        /* метод trim ставим чтобы пользователь не мог ввести одни пробелы и это засчиталось бы за ответ */
        if (a == '' || b == '' || a == null || b == null || a.length > 50) {
            i--;
            console.log('error');
        }
        else {
            personalMovieDB.movies[a] = b;
        }
    }
}

rememberMyMovies();

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





function showMyDB(close) {
    if (close) {
        console.log('Приватно');
    }
    else {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt("Ваш любимый жанр под номером  " + (i + 1));
    }
}

// writeYourGenres();



/* Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)


function findMaxNumber(a, b, c, d) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return 0;

    }
    else {
        let more = Math.max(a, b, c, d);
        return `Самое большое число из: ${a}, ${b}, ${c} и ${d} - это ${more}`;
    }
}


let res = findMaxNumber(2, 22, 21,8);

console.log(res); 

*/