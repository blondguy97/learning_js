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

function copy(mainObj) {
    let newObj = {};

    for (let key in mainObj) {
        newObj[key] = mainObj[key];
    }

    return newObj;
}

let num = {
    a: 2, 
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

let newNum = copy(num); /*  Таким образом мы создали копию объекта, которые друг от друга ПОЧТИ независят, но все же если мы поменяем вложенный объекта, поменяется и в оригинале. потому что мы создали ПОВЕРХНОСТНУЮ копию объекта. То есть мы можем менять только те свойства, которые лежат на первом уровне, но вложенные объекты в объект, мы затронуть не сможем, там опять же останется ссылочный тип данных. А есть еще и ГЛУБОКИЕ копии, о них позже*/

newNum.a = 10; // поменяется только в newNum, в num все останется прежним

newNum.c.x = 14; // Поменяется и там и там, потому что мы сделали ПОВЕРХНОСТНУЮ копию объекта


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

let newBigObj = Object.assign(smallObj, bigObj); // С помощью метода assign объекта Object, мы можем скрестить два объекта, первый аргумент тот который надо копировать, второй КУДА копировать. Нсли что создается также ПОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА

console.log(newBigObj); // Все свойства из одного и из другого объектов




let emptyObj = Object.assign(smallObj, {}); // Так мы можем скопировать какой-либо объект в пустой объект и получить поверхностную копию без всяких циклов

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

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [1, 2, 3];

log(...numbers); /* 
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

let newObj = {...oldObj};

console.log(newObj);

const someString = 'strsing';

function reverse (string) {

    if (string !== 'string') {
        console.log('error');
    }
    else {
        console.log(string.split('').reverse().join(''));
    }
}

reverse(someString)

