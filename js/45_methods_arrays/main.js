'use strict';

/* Методы переборов массивов */

/* Помним про метод forEach, он никогда не возвращает НОВЫЙ массив, он просто берет массив и его перебирает, берет каждый отдельный элемент и например выводит его в консоль или выводит на страницу */

/* 1) Метод filter, фильтрует элементы внутри массива. Он оставляет и старый массив и возвращает новый, который уже отфильтрован */

const names = ['ivan', 'james', 'Yn', 'Voldemart'];


const shortNames = names.filter(function (name) {
    return name.length < 5;
});


console.log(shortNames); /* [ 'ivan', 'Yn' ] Эти элементы подошли под условие где спрашиваются имена длина которых меньше 5 символов */

/* Получаем новый массив который мы получаем на основе фильтрации старого массива names */





/* 2) Метод map, позволяет взять исходный массив и изменить каждый элемент внутри него. Он также возвращает массив уже с измененными данными */

const answers = ['ivAN', ' HELLo', 'AnnA'];

const resultAnswers = answers.map(function (item) {
    return item.toLowerCase();
});


console.log(resultAnswers); /* [ 'ivan', ' hello', 'anna' ]. Все правильно, метод перевел все данные в массиве answers в нижний регистр */

/* Но нужно ли нам создавать каждый раз какую-либо отдельную переменную? Ответ НЕТ. Мы можем взять наш исходный массив который у нас был, и в него перепоместить тот массив который у нас получится в результате изменений  */

let answers_2 = ['ivAN', ' HELLo', 'AnnA']; /* Не забываем только поменять const на let, чтобы мы могли менять наш массив. */

answers_2 = answers_2.map(function (item) {
    return item.toLowerCase();
});

/* В итоге мы помещаем наш новый массив в наш СТАРЫЙ массив. Лучше всего помещать наш новсозданный массив в новую переменную, а не перезаписывать в старую */



/* 3) Методы every/some, это 2 метода который очень похожи по своей структуре и задачам. Они берут массив, перебирают его и если у нас хотя бы один элемент подходит по какому-либо условию, в таком случае он нам вернет true, если нет, то false */

const arr = [4, 'stroka', 'dsdsd'];

console.log(arr.some(function (item) {
    return typeof (item) === 'number'; /* true. Получаем правду потому что условие сошлось, хотя бы один из элементов массива по своему типу данных равен истине */ 
}));


const arr_2 = [4, 'stroka', 'dsdsd'];

console.log(arr_2.every(function (item) {
    return typeof (item) === 'number'; /* false. Получаем ложь потому что метод every используется так, чтобы КАЖДЫЙ элемент массива соответcтвовал условию, здесь же только 1 элемент массива равен по типу данных числу, а остальное строкам. Так что false */
}));



/* 3) Метод reduce, служит он чтобы схлопывать или собирать массив в одно единое целое, особенно это касается числовых данных */

const arr_4 = [4, 5, 1, 3, 2, 6];

let res = arr_4.reduce(function(sum, current) {
    return sum + current
});

console.log(res); /* 21. Сумма всех элементов массива */

/* Когда мы запускаем reduce у него есть 2 аргумента, которые подставляются автоматически. Первый аргумент sum, это сумма всех наших элементов.  Изначально он конечно равен нулю. Второй аргумент current, это тот каждый элемент который приходит к нему от массива. То есть reduce проходится по всем элементам и складывает их. Ну не обязательно может быть сложение, может быть вычитание или умножение. То есть reduce схлопывает весь массив в какое то единое значение

*/


const arr_5 = ['apple', 'watemelon', 'plum', 'pear']; /* Вот пример использование reduce со строками, а не с числами */


let res_2 = arr_5.reduce(function (sum, current) {
    return `${sum}, ${current}`
});

console.log(res_2); /* apple, watemelon, plum, pear. 
Вывод всех строк нашего массива через запятую
*/



const arr_6 = [4, 5, 1, 3, 2, 6]; 


let res_3 = arr_6.reduce(function (sum, current) {
    return sum + current
}, 5); /* Мы такэе можем через запятую передать начальное значение, например 5 */

console.log(res_3); /* 26. reduce также сложил все числа между собой, но при этом не забыл про начальное значение которое начало иметь sum, обычно оно имеет 0, но теперь имеет значение 5 
*/

/* Пример использования всех методов массивов на конкретном примере */



/* Задача достать всех имена ЛЮДЕЙ из этого объекта */

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

/* const newArr = Object.entries(obj);

console.log(newArr); 

[
  [ 'ivan', 'person' ],
  [ 'ann', 'person' ],
  [ 'dog', 'animal' ],
  [ 'cat', 'animal' ]
]

Получаем массив массивов, в которых заложены ключи и значения  

*/


const obj_2 = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};


const newArr = Object.entries(obj_2)
.filter(function(item) {
    return item[1] === 'person' /* [ [ 'ivan', 'person' ], [ 'ann', 'person' ] ]  
Теперь у нас остался массив только уже с двумя массивами где значение person
*/
})
.map(function(item) {
    return item[0]  /* [ 'ivan', 'ann' ] Тут мы получаем один массив с именами людей  */
})



console.log(newArr); 



const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 },
];

const adults = [];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].budget);  
}








const newPeople = people.map(function(person, index, array) {
    return `${person.name} (${person.age} )`;
});

console.log(newPeople);


for(let i = 0; i < people.length; i++) {
    console.log(i);
}






// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// } 


// for (human of people) {
//     console.log(human);
// } 

// people.forEach(function(person, index, array) {
//     console.log(person);
//     console.log(index);
//     console.log(array);
// });
    

 
