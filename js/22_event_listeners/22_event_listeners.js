'use strict';

let btn = document.querySelector('#btn');

let btn2 = document.querySelector('.anotherBtn');

btn.addEventListener('click', function() {
    alert('click');
});
// С помощью метода addEventListener мы можем добавлять практически любое действие какое пользователь может сделать с объектом на странице, то есть кликнуть, навести курсор, убрать курсор, хажать, нажать, отпустить любую клавишу на клавиатуре, так далее

window.addEventListener('keyup', function() {
    btn.style.backgroundColor = 'red';
});

btn.addEventListener('mouseenter', function(event) {
    event.target.remove();
});

// В параметры функции внутри события (идет после mouseenter)
// передается объект события, можно называть как угодно.
// У объекта event есть метод target, то есть то на чем сработало события

let i = 0;

function delElem(event) {
    console.log(event.target);
    i++;
    if (i == 2) {
        btn2.removeEventListener('click', delElem);
    }
}

btn2.addEventListener('click', delElem);


// Также мы в callback-function (то что идет после click) можем передавать уже существующую функцию
// но не вызывать ее, а просто передать без круглых скобок

// Таким образом как выше, мы можем указывать метод removeEventListener, чтобы при каком-либо условии
// вызывать его чтобы действие не повторялось более одного или нескольких раз, по усмотрению



let link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});


// У объекта event есть очень важный и нужный метод preventDefault(); 
// Он отменяет стандартные действия браузера типо перехода по ссылке, выделение текста и тд
// Этот метод надо ВСЕГДА ставить в начало функции, а затем уже писать то что мы просим у элемента


link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});

btn2.addEventListener('click', delElem, {once: true});

// Также чтобы не городить конструкций с removeEventListener, 
// мы можем передать в аргументы функции опцию once: true чтобы событие выполнялось только 1 раз (но если нужно чтобы событие исполнилось больше 1ого раза, придется городить)