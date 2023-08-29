/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

let adv = document.querySelectorAll(".promo__adv img, .promo__adv-title");
let genre = document.querySelector(".promo__genre");
let bg = document.querySelector(".promo__bg");
let promoList = document.querySelector(".promo__interactive-list");
let promoItems = document.querySelectorAll(".promo__interactive-item");


const movieDB = {
    movies: [
        "Анатолий",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Амбар",
        "Скотт Пилигрим против..."
    ]
};

adv.forEach(function (item) {
    item.remove();
});


/* ИЛИ

for (let i = 0; i < adv.length; i++) {
    adv[i].remove();
}


*/


genre.textContent = "Драма";

bg.style.backgroundImage = 'url("img/bg.jpg")';


promoList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach(function (item, num) {
    promoList.innerHTML = promoList.innerHTML +
        `<li class="promo__interactive-item">
                        ${num + 1} ${item}
                            <div class="delete"></div>
                        </li>`;
});