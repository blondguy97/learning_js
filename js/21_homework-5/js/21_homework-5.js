/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


let adv = document.querySelectorAll('.promo__adv img');
let genre = document.querySelector('.promo__genre');
let bg = document.querySelector('.promo__bg');
let promoList = document.querySelector('.promo__interactive-list');
let promoItems = document.querySelectorAll('.promo__interactive-item')

bg.style.backgroundImage = 'url("img/bg.jpg")';

adv.forEach(function (item) {
    item.remove();
});

genre.textContent = 'Драма';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Алтай"
    ]
};


movieDB.movies.sort();


promoList.innerHTML = ''

movieDB.movies.forEach(function (film, num) {
    promoList.innerHTML = promoList.innerHTML + `<li class="promo__interactive-item">${num + 1} ${film}
                            <div class="delete"></div>
                            </li>`
})


