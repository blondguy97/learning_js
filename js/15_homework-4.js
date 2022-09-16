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

'use strict';


let personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    detectPersonalLvl: function () {
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
    },
    rememberMyMovies: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?').trim(),
                b = prompt('На сколько оцените его?').trim();
            /* метод trim ставим чтобы пользователь не мог ввести одни пробелы и это засчиталось бы за ответ */
            if (a == '' || b == '' || a == null || b == null || a.length > 50) {
                i--;
                console.log('error');
            }
            else {
                personalMovieDB.movies[a] = b;
            }
        }
    },
    /*  3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
 Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
 при помощи метода forEach вывести в консоль сообщения в таком виде:
 "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genres == null || genres == '') {
                i--;
                alert('Вы ввели ввели неверные данные или отменили действие!');
            } 
            else {
                personalMovieDB.genres[i] = genres;
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    showMyDB: function () {
        if (personalMovieDB.privat) {
            console.log('Приватно');
        }
        else {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};


personalMovieDB.writeYourGenres();







