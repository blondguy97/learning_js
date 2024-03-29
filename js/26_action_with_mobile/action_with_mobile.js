// Всего событий в мобильных браузерах в js


/* В мобильных браузерах конечно же есть свои события, такие как касания(тапы), мультитач, скроллинг (пальцем)
листание и так далее. То есть то что мы делаем пальцами на сенсорных телефонах
Всего этих событий 6 */

// 1) touchstart - возникает при касании к элементу
// 2) touchmove - возникает при касании к элементу палец начинает двигаться по нему
//    то при каждом смещении пальца событие будет срабатывать
// 3) touchend - возникает когда палец отрывается от элемента
// 4) touchenter - возникает когда мы ведем пальцем по экрану и наскакиваем им 
//    на какой-то элемент на котором навешано событие touchenter
// 5) touchleave  - возникает когда мы ведем пальцем по экрану и наскакиваем им 
//    на какой-то элемент на котором навешано событие touchleave и после        
//    покидаем пальцем этот элемент
// 6) touchcancel -  возникает тогда, когда точка соприкосновения больше не регистрируется на поверхности. К примеру, перемещение за пределы браузера.

document.addEventListener('DOMContentLoaded', () => { // Нужно чтобы мы точно знали что все dom-элементы уже готовы чтобы работать со скриптами
    'use strict';

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        console.log('Start of touch');
    });
    // при передаче событий прикосновений (touch) на мобилках, всегда следует
    // применять объект события и его метод preventDefault для отмены станд.
    // действий браузера (на всякий случай)


    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log('Move');
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();
        console.log('End of touch');
    });

    box.addEventListener('touchcancel', (event) => {
        event.preventDefault();
        console.log('Cancel');
    });

    box.addEventListener('touchenter', (event) => {
        event.preventDefault();
        console.log('touchenter');
    });

    box.addEventListener('touchleave', (event) => {
        event.preventDefault();
        console.log('touchleave');
    });
});

// У объекта события есть 3 основных метода для работы с касаниями на 
// сенсорных поверхностях. 
// 1) touches - это свойство показывает нам сколько сейчас пальцев 
//     взаимодействуют с экраном, 
//     те, которые сейчас держаться на сенсорном экране 
// 2) targetTouches - показывают кол-во пальцев
//     которые взаимодействуют с какой-либо конкретным элементом    
// 3) changedTouches - показывают список пальцев которые учавствуют в текущем 
//    событии. То есть те которые уже совершили некоторое действие, например
//    при событии touchcancel мы убрали 1 палец, в таком случае событие
//    changedTouches выведет номер того пальца который был убран

