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

'use strict';


document.addEventListener('DOMContentLoaded', function () {

    /* Вот пара важных событий документа(то есть всей страницы) которые часто будут нужны:
    
    1) DOMContentLoaded – браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены.
    2) load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).
    
    
    Событие DOMContentLoaded – DOM готов, так что обработчик может искать DOM - узлы и инициализировать интерфейс.
    Событие load – внешние ресурсы были загружены, стили применены, размеры картинок известны и т.д.
    
    
    */

    let ads = document.querySelectorAll(".promo__adv img, .promo__adv-title");
    let genre = document.querySelector(".promo__genre");
    let bg = document.querySelector(".promo__bg");
    let promoList = document.querySelector(".promo__interactive-list");
    let promoItems = document.querySelectorAll(".promo__interactive-item");
    let checkbox = document.querySelector('input[type="checkbox"]');
    let form = document.querySelector('form.add');
    let input = document.querySelector('.adding__input');



    const movieDB = {
        movies: [
            "Анатолий",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Амбар",
            "Скотт Пилигрим против..."
        ]
    };






    function deleteAds(advertisements) {
        advertisements.forEach(function (item) {
            item.remove();
        });

        /* ИЛИ
            for (let i = 0; i < advertisements.length; i++) {
                advertisements[i].remove();
            }
        */

    }






    function makeChanges() {
        genre.textContent = "Драма";
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    }



    function movieSort(movies) {
        movies.sort();
    }



    function createMovieList(films, parent) {

        while (films.firstChild) {
            films.removeChild(films.firstChild);
        }

        movieSort(parent)


        parent.forEach(function (item, num) {
            films.innerHTML = films.innerHTML +
                `<li class="promo__interactive-item">
                    ${num + 1}. ${item}
                        <div class="delete"></div>
                    </li>`;
        });

        document.querySelectorAll('.delete').forEach(function (btn, i) {
            btn.addEventListener('click', function () {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(promoList, movieDB.movies);
                /* Применяем рекурсию и после клика по корзине, удаляем родительский элемент со страницы и этот элемент из массива, и заново строим список через функцию createMovieList вызывая эту функцию саму в себе с передачей аргументов, и теперь список будет каждый раз актуальным при удалении элементов */
            })
        })

    }







    form.addEventListener('submit', function (event) {
        event.preventDefault()

        let newFilm = input.value;
        let favMovie = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 20) {
                newFilm = `${newFilm.slice(0, 20)}...`
            }
            movieDB.movies.push(newFilm);
            movieSort(movieDB.movies)



        }
        createMovieList(promoList, movieDB.movies)


        if (favMovie) {
            console.log(`${newFilm} выбран одним из любимых фильмов`);
        }

        event.target.reset();


    })




    deleteAds(ads)
    makeChanges()
    createMovieList(promoList, movieDB.movies)


})