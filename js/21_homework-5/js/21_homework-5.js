/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

let advs = document.querySelectorAll(".promo__adv img");
// Указываем через запятую какие именно блоки мы берем
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
		"Скотт Пилигрим против...",
	],
};

 


advs.forEach(function (item) {
	item.remove();
});

/* ИЛИ

for (let i = 0; i < adv.length; i++) {
	adv[i].remove();
}


*/

genre.textContent = "Драма";

bg.style.backgroundImage = 'url("img/bg.jpg")'; // Меняем задний фон блока с постером 

promoList.innerHTML = ""; // Очищаем весь список фильмов присвоив в html пустоту

movieDB.movies.sort(); // Сортируем все фильмы в массиве по алфавиту

movieDB.movies.forEach(function (item, numOfFilm) {
	promoList.innerHTML = promoList.innerHTML +
		`<li class="promo__interactive-item"> 
				${numOfFilm + 1}.
         ${item}<div class="delete"></div></li>`;
});
