"use strict";

let box = document.querySelector(".box");
let body = document.querySelector("body");
let btns = document.querySelectorAll("button");
let wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "red";
btns[0].style.width = "900px";


 // Мы можем задавать css-стили элементам которые получили с html-страницы
// через свойство style(внимание - так задаются только inline-стили, то есть которые прописаны не в отдельном css файле, а прямо через атрибут в элементе на html странице) Это сделано для того, чтобы перебить возможно уже имеющиеся стили прописанные в css файле, так как inline стили более приоритетные
// также нужно обратить внимание на то что название стилей прописываются через формат camelCase

if (btns[0].clientWidth === 900) {
	body.style.backgroundColor = "lightgreen";
}
/* Можно также через различные условия менять различные стили у элементов */

box.style.cssText = "background-color: deeppink; width: 400px; height: 100px";

/* Но задавать каждый стиль как в примерах выше, неудобно.
Поэтому куда удобнее задавать сразу много стилей через точку с запятой.
Это можно сделать через свойство cssText как в примере выше */


let triangle = document.querySelector(".triangle");

let someVariable = "deeppink";

triangle.style.cssText = `border-bottom: 90px solid ${someVariable};`;

/* С помощью этого мы можем через уже известные нам бэктики добавлять в css свойства переменные.*/ 



let hearts = document.querySelectorAll(".heart");

for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.cssText = "background-color: blue";
}

/* Вот так с помощью цикла for который мы применили на псевдомассиве мы можем изменить все элементы на странице разом */






let circles = document.querySelectorAll(".circle");


circles.forEach(function (item) {
	item.style.cssText = "background-color: purple";
});

/* Вот так с помощью цикла forEach который мы применили на псевдомассиве мы можем изменить все элементы на странице разом */




/* Очень часто части сайты создаются, даже можно сказать генерируются, при помощи javascript, и мы должны уметь создавать такие элементы на лету */


let div_1 = document.createElement("div");
// Методом createElement мы можем создать необходимые элементы на html странице, но на этом этапе элемент еще только внутри js то есть не на странице

let text = document.createTextNode("Тут был я");
/* Так мы можем создавать текст на странице без оболочки какого-либо тега */



div_1.classList.add("black");
// Метод classList позволяет добавлять, удалять, переключать классы из css, ведь добавлять инлайновые стили (которые вписаны прямо в html) неудобны, а с помощью метода classList классы добавляются не инлайново, то есть классы которые мы таким образом добавляем находятся в файле css, либо просто модифицируем их

div_1.append(text)

document.body.append(text);
// метод append позволяет добавлять элементы В КОНЕЦ того элемента который указан, в нашем случае это body

document.body.appendChild(div);
// То же самое только устаревший синтаксис

document.body.prepend(div);
// метод prepend позволяет добавлять элементы В НАЧАЛО того элемента который указан, в нашем случае это body




div.style.width = "500px"; // инлайново добавляем блоку ширины

div.textContent = "hello";
// Таким образом мы можем добавлять текст в созданные нами блоки

div.innerHTML = "<h2>Я созданный при помощи JS блок</h2>";
// сюда можно писать целый html, то есть теги, текст, ссылки и все остальное что есть в html

document.querySelector(".wrapper").prepend(div); // Кстати чтобы неиспользовать переменную, можно сразу же найти через querySelector нужный элемент и добавить к нему prepend или append

wrapper.insertBefore(
	div,
	hearts[0],
); /* Сначала выбираем родителя, затем выбираем элемент КОТОРЫЙ мы вставляем, а вторым элементом мы пишем тот элемент ПЕРЕД КОТОРЫМ мы вставляем 1ый элемент.
 Устаревший стандарт */

hearts[0].before(div); // соврем. Стандарт
hearts[0].after(div);

hearts[2].replaceWith(circles[1]); // Таким образом мы заменяем третий hearts элементом 2ого кружка, это современный синтаксис

wrapper.replaceChild(
	hearts[2],
	circles[1],
); /* Точно то же действие только в устаршем формате */

circles[1].remove(); //  Таким образом мы удаляем любой элемент со страницы, это современный синтаксис

wrapper.removeChild(hearts[1]); // Удаление элемента через родителя, это устар. синтаксис

div.insertAdjacentHTML("afterend", " <h2>i am a h2 title</h2>");
// Вставка html-кода перед или после и прямо В указанный тег(смотреть первый аргумент, там 4 варианта)
