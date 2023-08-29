'use strict';

/* С помощью умения путешествовать по DOM дереву мы сможем обращаться к определенному элементу и обратиться к его родителю или к следующему элементу и у них уже поменять класс */

console.log(document.body);
console.log(document.documentElement);

//  Таким образом мы получаем всю HTML разметку

console.log(document.body.childNodes);
// Таким образом мы получаем все Ноды(узлы) на странице

/* Узлами можно назвать то что мы и не видим на странице, это например переносы строк, также узлами мы можем назвать и текстовые элементы. А вот элементами можно назвать теги на странице */

/* Методы которые позволят нам путешествовать по DOM дереву */

console.log(document.body.firstChild); 
console.log(document.body.lastChild);

/* Таким образом мы получаем первый и последний НОДЫ(узлы) на странице
Но тут мы отталкивались только от родителей, но можно отталкиваться
и от абсолютно любого элемента на странице */

/* сейчас по поработаем с командами которые позволят нам получить родителей, соседей и детей */

console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);

/*  Таким образом мы выбираем нужный элемент на странице и с помощью
 parentNode мы идем вверх по родителям, также мы можем продублировать и поставить еще один
 parentNode и тогда мы пойдем еще выше по DOM дереву */

console.log(document.querySelector('[data-current="3"]'));
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);
/* Также мы можем путешествовать по DOM дереву используя data атрибуты у html тегов
 все начинаются со слова data-*тут любое наше слово подходящее по смыслу*
 с помощью nextSibling мы выбираем следующую ТЕКСТОВУЮ НОДУ
 с помощью previousSibling мы выбираем предыдущую ТЕКСТОВУЮ НОДУ
 И то и то другое будут переносами строк
 */

// Но есть методы которые вызывают конкретно элементы, например nextElementSibling и previousElementSibling

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.querySelector('[data-current="3"]').parentElement);
// Таким образом мы выбираем родительский ЭЛЕМЕНТ, а не ноду(узел)

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
// Таким образом мы выбираем первые и последние ЭЛЕМЕНТЫ у выбранного тега или класса, а не ноды

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
// с помощью цикла for of, так как childNodes это псевдомассив, мы можем пройтись и отсеять все ноды и оставить только элементы, делаем выборку по nodeName, у ненужных нам Узлов это #text, и ставим устровие, что когда будет встречаться nodename со значением #text, пропускаем его и продолжаем выводить остальное, а остальное это и есть только элементы






 