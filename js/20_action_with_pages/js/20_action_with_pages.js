'use strict';

let btn = document.querySelectorAll('button')[0];
let hearts = document.querySelectorAll('.heart');
let circles = document.querySelectorAll('.circle');
let wrapper = document.querySelector('.wrapper');

btn.style.backgroundColor = 'red'; 
btn.style.width = '1000px'; 

// Мы можем задавать css-стили элементам которые получили с html-страницы
// через свойство style(внимание - так задаются только inline-стили, то есть которые прописаны не в отдельном css файле, а прямо через атрибут в элементе на html странице)
// также нужно обратить внимание на то что название стилей прописываются через формат camelCase

btn.style.cssText = 'background-color: red; width: 1000px';
// Но задавать каждый стиль как в примерах выше, неудобно.
// Поэтому куда удобнее задавать сразу много стилей через точку с запятой.
// Это можно сделать через свойство cssText как в примере выше


let div = document.createElement('div');
let div2 = document.createElement('div');
// Методом createElement мы можем создать необходимые элементы на html странице


div.classList.add('black');
div2.classList.add('blue');
// Метод classList позволяет добавлять, удалять, тогглить классы из css 

document.body.append(div);
// метод append позволяет добавлять элементы В КОНЕЦ того элемента который указан ДО метода append

document.body.prepend(div);
// метод prepend позволяет добавлять элементы В НАЧАЛО того элемента который указан ДО метода append


div2.innerHTML = '<h2>hello</h2>';
// сюда можно писать целый html, то есть теги, текст, ссылки и все остальное что есть в html

div.textContent = 'hello';
// можно писать только текст

wrapper.insertBefore(div2, hearts[1]); // устар. Обращение через родителя

hearts[0].before(div2); // соврем. Стандарт
hearts[0].after(div);

hearts[2].replaceWith(circles[1]);

box.remove(); // соврем. Стандарт
wrapper.removeChild(hearts[1]); // устар. Обращение через родителя

div.insertAdjacentHTML('afterend', ' <h2>i am a h2 title</h2>');
// Вставка html-кода перед или после и прямо В указанный тег(смотреть первый аргумент, там 4 варианта)