/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let adv = document.querySelectorAll(".promo__adv img");
  let genre = document.querySelector(".promo__genre");
  let bg = document.querySelector(".promo__bg");
  let promoList = document.querySelector(".promo__interactive-list");

  let form = document.querySelector("form.add");
  let input = form.querySelector(".adding__input");
  let checkBox = form.querySelector('[type="checkbox"]');

  let movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Алтай",
    ],
  };

  function deleteAdv(advertisement) {
    advertisement.forEach(function (item) {
      item.remove();
    });
  }

  function makeChanges() {
    bg.style.backgroundImage = 'url("img/bg.jpg")';
    genre.textContent = "Драма";
  }

  function sortArr(arr) {
    arr.sort();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let newMovie = input.value.trim();
    let favorite = checkBox.checked;

    if (newMovie) {
      if (newMovie.length > 21) {
        newMovie = newMovie.slice(0, 21) + "...";
      }

      if (favorite) {
        console.log("Сделать любимым");
      }

      movieDB.movies.push(newMovie);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, promoList);
    }

    form.reset();
  });


  
  function createMovieList(films, parent) {
    parent.innerHTML = "";
    
    films.forEach(function (film, num) {
      parent.innerHTML =
      parent.innerHTML +
      `<li class="promo__interactive-item">
      ${num + 1} ${film}
      <div class="delete"></div>
      </li>`;
    });
    
    let delsMovie = document.querySelectorAll(".delete");
    
    delsMovie.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent)
      });
    });
    
    
  }
  
  deleteAdv(adv);
  makeChanges();
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, promoList);
});
