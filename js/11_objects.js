'use strict';

let testObj = new Object(); // Один из возможных способов создать объект, но лучше использовать более классический способ

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};




console.log(options.name); // test

delete options.name; // Таким действием мы можем удалить любое ключ-значение в объекте

console.log(options); // name: 'test' уже нету, оно удалено



for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

/* Порой нужно перебрать объект, для такого существует цикл for in. Здесь переменной для перебора ключей объекта options, выбрано слово key (но можно и любое другое выбрать, но часто называют именно словом key) слова in options, означают что мы будет копаться В объекте options, то есть key in options, перебор ключей в объекте options. А в фигурных скобках мы уже задаем блок кода в котором мы говорим что делать с этими перебираемыми ключами, в данном случсе в скобках мы пишем что свойство *переменная key* имеет значение, а далее мы опять пишем переменную в которой указываем собстенно сам объект options а в квадратных скобках пишем опять key, то есть уже это не ключ, а значение объекте options
*/

/* 
Здесь все вывелось в виде строк, но одно из значений объекта options, является также объектов, и его перебор for in перебрать не смог,
вывел только "Свойство colors имеет значение [object Object]" Когда js на такое натыкается, он не может такое значение как вложенный объект, превратить в строку
[object Object] это не является ошибкой, это просто строковое представление объекта
Но перебрать объект полностью, включая и вложенные объекте, можно, для этого нужно будет применить условие, в котором будет уточнятся что если ключ такого-то объекта является тоже объектом, но будет выполнятся второй цикл, уже с перебором вложенного объекта. Подробнее ниже
 */

for (let key in options) {
    if (typeof (options[key] === 'object')) {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

/* теперь все работает нормально, перебирается и объект внутри объекта тоже.
 console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
 Если это слишком мозговзрывающая конструкция, ниже более простой пример
 */

console.log(options['colors']['border']); /* black. То есть это как бы двойной доступ,
сначала к объекту внутри объекта, а затем уже к его свойству */

/* Порой нам нужет счетчик для того чтобы узнать сколько свойств (или методов) находится в объекте, классического свойства lenght(длины) у объектов нет, поэтому часто используется банальный счетчик. Вот как в примере ниже*/

let counter = 0;

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;

    }
}
console.log(counter); // 5. Из-за того что мы поставили инкремент переменной counter в обоих условиях, подсчитались все свойства, даже свойства во вложенном объекте.

/* Но способ с перебором внутри перебора слишком заморочный, есть намного проще решение. Оно внизу */

console.log(Object.keys(options));

/* метод keys объекта Object принимает в скобки какой-либо объект и создает массив где все элементы это ключи переданного в скобки объекта. Вспоминаем, что как у строк, так и у массивов есть свойство length, то есть можно узнать длину. А раз этот метод создал массив, мы можем добавить ему свойство length и узнать сколько элементов находится в объекте*/

console.log(Object.keys(options).length); // 4. То есть столько, сколько элементов в объекте


let options_2 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Выпонился блок кода в методе makeTest который находится в объекте options_2');
    }
};

/* Метод makeTest в объекте options_2, это функция которая может что-то выполнять, то есть методы объектов мы можем создавать самостоятельно*/


options_2.makeTest(); // Выпонился блок кода в методе makeTest который находится в объекте options_2

/* Деструризация объектов (такое возможно и для массивов)*/


const {width} = options_2; 

const {bg} = options_2.colors; // 

console.log(width); // 1024
console.log(bg); // red
