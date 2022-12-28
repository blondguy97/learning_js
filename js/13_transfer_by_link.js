'use strict';

let a = 5;
let b = a;

b = b + 5;

console.log(a); // 5
console.log(b); // 10

const obj = {
    a: 5,
    b: 1
};

const copyObj = obj; // в copyObj передается ссылка на объект obj

copyObj.a = 10; // Меням одновременно и в obj, и в copyObj

console.log(obj); // { a: 10, b: 1 } 
console.log(copyObj); // { a: 10, b: 1 } 

/* суть в том что изменили мы как бы свойство копии объекта, а если посмотреть и то и другое, изменились сразу оба объекта, и оригинал и копия. Это называется передача по ссылке. Изменяя что-то внутри copyObj мы модифицируем наш изначальный объект obj */

/* Когда мы работаем с примитивными типами данных, такие как строки, числа. Мы передаем саму структуру объекта, то есть те же данные записанные в другую переменную. Они передаются по значению. А когда с объектами, передается все не по значению, а по ссылке. То есть мы передаем сам объект */

// Способ №1 для создания поверхностного объекта. Цикл for

let num = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

function copy(mainObj) {
    let newObj = {};

    for (let key in mainObj) {
        newObj[key] = mainObj[key];
    }

    return newObj;
}


let newNum = copy(num); // Передаем переменной newNum функцию с аргументом num которая возвращает скопированный объект

newNum.a = 10; // поменяется только в newNum, в num все останется прежним, значит мы создали абсолютно новую независимую копию объекта?

newNum.c.x = 14; // НЕТ. Как и раньше поменяется и там и там, потому что выше мы сделали ПОВЕРХНОСТНУЮ копию объекта
/*  Таким образом мы создали копию объекта, которые друг от друга ПОЧТИ независят, но все же если мы поменяем вложенный объекта, поменяется и в оригинале. потому что мы создали ПОВЕРХНОСТНУЮ копию объекта. То есть мы можем менять только те свойства, которые лежат на первом уровне, но вложенные объекты в объект, мы затронуть не сможем, там опять же останется ссылочный тип данных. А есть еще и ГЛУБОКИЕ копии, о них позже*/


console.log(newNum);

console.log(num);



// Способ №2 для создания поверхностного объекта. Метод assign

let smallObj = {
    X: 245,
    y: 64
}

let bigObj = {
    a: 17,
    b: 20,
    c: 30,
    d: 22,
    e: 33,
    f: 12
};

let newBigObj = Object.assign(smallObj, bigObj); // С помощью метода assign объекта Object, мы можем скрестить два объекта, первый аргумент тот который надо копировать, второй КУДА копировать. Если что создается также ПОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА

console.log(newBigObj); // Все свойства из одного и из другого объектов


let smallOb = {
    X: 245,
    y: 64
}

let emptyObj = Object.assign({ a: 1 }, smallOb); // Так мы можем скопировать какой-либо объект в пустой объект и получить поверхностную копию без всяких циклов

console.log(emptyObj); // X: 245, y: 64

// МАССИВЫ

let oldArr = ['a', 'b', 'c'];

let newArr = oldArr.slice(); // Уже знакомым нам методом мы можем очень легко сделать поверхностную копию объекта

newArr[0] = 'z';

console.log(newArr); // [ 'z', 'b', 'c' ]
console.log(oldArr); // [ 'a', 'b', 'c' ]


// spread оператор


let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['liveJournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); /* [
        'youtube',
        'vimeo',
        'rutube',
        'liveJournal',
        'blogger',
        'vk',
        'facebook'
      ]
       */

// spread оператор записывается как троеточние которые пишутся перед массивами или объектами 

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [1, 2, 3];

console.log(...numbers); /* 
    1
    2
    3 */

// spread оператор может и так работать, в аргументы к функции раскладывать при помощи троеточия например массив

// Способ №3 для создания поверхностного объекта. spread оператор

let array = ['a', 'b'];

let newArray = [...array];

console.log(newArray); // [ 'a', 'b' ]


let oldObj = {
    one: 1,
    two: 2
};

let newObj = { ...oldObj };

console.log(newObj); // Таким образом с помощью спред оператора мы можем создавать поверхностную копию объекта

const someString = 'strsing';

function reverse(string) {

    if (string !== 'string') {
        console.log('error');
    }
    else {
        console.log(string.split('').reverse().join(''));
    }
}

reverse(someString);


/* Задачи на работу с объектами
В этих заданиях мы с вами потренируемся работать с объектами. Это важный навык и нам нужно понимать как работают эти структуры.


У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, но ему не хватает навыков. Выполните часть заданий за него.

Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно

*/

/* ОТВЕТ

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '12 month'
    }
};

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}

let x = showExperience(personalPlanPeter)

console.log(x); */


/* 2) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)

*/

/* ОТВЕТ

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '12 month'
    }
};

function showAgeAndLangs(plan) {
    let {age} = plan;
    let {languages} = plan.skills;

    let str = `Мне ${age} лет и я владею:`;

    languages.forEach(function(lang){
        str = str + ' ' + lang.toUpperCase();
    });

   return str;
}

let res = showAgeAndLangs(personalPlanPeter);

console.log(res); // Мне 29 лет и я владею: RU ENG
 */


/* 
Задачи на работу с массивами
В этих заданиях мы с вами потренируемся работать с массивами.


Задачи:

1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

ОТВЕТ

const family = ['Peter', 'Ann', 'Alex', 'Linda'];


function showFamily(fam) {

  let str = '';
    if (fam.length === 0) {
        str = 'Семья пуста';
    }
    else {
        str = `Семья состоит из: `;
    }


    fam.forEach(function (item) {
        str = str + `${item } `;

    });

    return str;

}

let x = showFamily(family);

console.log(x);

*/


/*
2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  выведет в консоль

lisbon
rome
milan
dublin


ОТВЕТ

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item) {
        console.log(item.toLowerCase());
    });
}

standardizeStrings(favoriteCities);

 */


/* Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!" */


let someShit = 'sd';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Error';
    }
    else {
       return str.split('').reverse().join("");
    }
}

let res = reverse(someShit);

console.log(res);