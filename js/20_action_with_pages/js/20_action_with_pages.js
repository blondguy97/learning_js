'use strict';

let box = document.querySelector('.box');
let btns = document.querySelector('button');
let hearts = document.querySelectorAll('.heart');
let circles = document.querySelectorAll('.circle');
let wrapper = document.querySelector('.wrapper');
let triangle = document.querySelector('.triangle')

btns.style.backgroundColor = '#000 ';
btns.style.width = '102px';
 


 // Мы можем задавать css-стили элементам которые получили с html-страницы
// через свойство style(внимание - так задаются только inline-стили, то есть которые прописаны не в отдельном css файле, а прямо через атрибут в элементе на html странице)
// также нужно обратить внимание на то что название стилей прописываются через формат camelCase

btns.style.cssText = 'background-color: green; width: 200px';
// Но задавать каждый стиль как в примерах выше, неудобно.
// Поэтому куда удобнее задавать сразу много стилей через точку с запятой.
// Это можно сделать через свойство cssText как в примере выше


let col_1 = 'red';

triangle.style.cssText = `border-bottom: 90px solid ${col_1};`;

/* С помощью этого мы можем через уже известные нам бэктики добавлять в css свойства переменные. То есть рассчитать цвет или ширину элемента можно динамически в зависимости от какого-либо условия  */


for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'gray'
}

/* Вот так с помощью цикла for который мы применили на псевдомассиве мы можем изменить все элементы на странице разом */    

circles.forEach(function(item) {
    item.style.backgroundColor = 'purple'
})

/* Вот так с помощью цикла forEach который мы применили на псевдомассиве мы можем изменить все элементы на странице разом */    


let text = document.createTextNode('Тут был я'); 
/* Так мы можем создавать текст на странице без оболочки какого-либо тега */

let div = document.createElement('div');
// Методом createElement мы можем создать необходимые элементы на html странице, но на этом этапе элемент еще только внутри js то есть не на странице

div.classList.add('black');
 // Метод classList позволяет добавлять, удалять, переключать классы из css, ведь добавлять инлайновые стили (которые вписаны прямо в html) неудобны, а с помощью метода classList классы добавляются не инлайново, то есть классы которые мы таким образом добавляем находятся в файле css 

 div.textContent = 'hello';
 // Таким образом мы можем добавлять текст в созданные нами блоки 
 
 div.innerHTML = '<h2>Я созданный при помощи JS блок</h2>';
 // сюда можно писать целый html, то есть теги, текст, ссылки и все остальное что есть в html

div.style.width = '500px'; // инланово добавляем блоку ширины



 document.body.append(div);
 // метод append позволяет добавлять элементы В КОНЕЦ того элемента который указан, в нашем случае это body 
 
 document.body.appendChild(div);
 // То же самое только устаревший синтаксис

 document.body.prepend(div);
 // метод prepend позволяет добавлять элементы В НАЧАЛО того элемента который указан, в нашем случае это body

document.querySelector('.wrapper').prepend(div); // Кстати чтобы неиспользовать переменную, можно сразу же найти через querySelector нужный элемент и добавить к нему prepend или append    

wrapper.insertBefore(div, hearts[0]); // Сначала выбираем родителя, затем выбираем элемент КОТОРЫЙ мы вставляем, а вторым элементом мы пишем тот элемент ПЕРЕД КОТОРЫМ мы вставляем 1ый элемент

hearts[0].before(div); // соврем. Стандарт
hearts[0].after(div);

hearts[2].replaceWith(circles[1]); // Таким образом мы заменяем третий hearts элементом 2ого кружка, это современный синтаксис



circles[1].remove(); //  Таким образом мы удаляем любой элемент со страницы, это современный синтаксис


wrapper.removeChild(hearts[1]); // Удаление элемента через родителя, это устар. синтаксис 

div.insertAdjacentHTML('afterend', ' <h2>i am a h2 title</h2>');
// Вставка html-кода перед или после и прямо В указанный тег(смотреть первый аргумент, там 4 варианта)