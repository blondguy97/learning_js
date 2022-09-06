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
        if (a == '' || b == '' || a == null || b == null || a.length > 50) {
            i--;
        }
        else {
            personalMovieDB.movies[a] = b;
        }
    }
}

// rememberMyMovies();

// Аналог цикла в функции rememberMyMovies();

// let i = 0;

// while (i < 2) {
//     let a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?');

//     i++;
//     if (a == '' || b == '' || a == null || b == null || a.length > 50) {
//         i--;
//     }
//     else {
//         personalMovieDB.movies[a] = b;
//     }
// }



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
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

