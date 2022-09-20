'use strict';


// To string

// 1)

console.log(typeof(String(null))); // string. Наша команда перевела тип данных null в строку, то есть как будто взяла в кавычки
console.log(typeof String(4)); // string. тот же самый принцип. Typeof можно использовать как со скобками так и без

// 2)

console.log(typeof 4 + ''); // string. Конкатенация, при со сложении со строкой, все равно выходит строка

let num = 4;

console.log('http://vk.com/catalog/' + num); // строка http://vk.com/catalog/4. Это старый способ объединения строк и переменных. Без применения интеполяции с помощью бектиков

let fontSize = 26 + 'px'; // строка 26px


// to Number 

// 1) 

console.log(typeof(Number('4'))); // number. Строковое значение мы переделали в цифру

// 2)

console.log(typeof +'4'); // number. Мы переделали строку 4 в цифру 4 с помощью унарного плюса

// 3)

let example = parseInt('15 some string'); // number. Мы переделали строку 4 в цифру 4 с помощью функции parseInt которая переводит все в числа в 10тичной системе исчисления, то есть отбрасывает буквы

console.log(example); // 15

// to Boolean

// 0, '', null, undefined, NaN - эти 5 типов данных всегда false, все остальное true



// 1)

let swither = null;

if (swither) {
    console.log('This condition will not work because null == false');
}

swither = 1;

if (swither) {
    console.log('This condition will work because 1 == true');
}


// 2) 

console.log(typeof(Boolean('4'))); //Boolean. Строковое значение мы переделали в boolean 

// 3)

console.log(typeof(!!'4')); //Boolean. Строковое значение мы переделали в boolean c помощью 2ух знаком восклицания
