"use strict";

if (4 == 10) {
  console.log("ok!");
} else {
  console.log("error"); // error
} // если условие будет true, то выполнится блок if, а если false, то выполнится блок else


if (1) {
  console.log('Выполнится, потому что в логическом контексте, 1 и другие положительные числа это всегда true');
}







const num = 50;

if (num < 49) {
  console.log("error");
} else if (num > 100) {
  console.log("error too"); // С помощью блок else if можно бесконечно развлетвлять условия
} else {
  console.log("everything ok! It is working!"); // если ни одно из условий не подошло, выполняется блок else
}

(num === 50) ? console.log("everything ok!"): console.log("error");

// Условие выше это тернарный оператор, почти тоже самое что и else if, но просто записывается в одну строку, в скобках идет задание условия как будто через if, если все true, все верно то выполняется блок кода который идет после вопросительного знака, если же нет, выполняется то что после двоеточния(аналог блок else)
// Тернарным оператором условие называется потому что в условии аж 3 аргумента, сначала то что в скобках, потом то что после вопросительного знака, а потом то что после двоеточия. Пока что в JS  он такой один.

// 4 + 4 это бинарный оператор, это плюс
// и унарный оператор это например +'4' который переводит тип данных строка в тип данных число

// Также следует обратить внимание что в скобках указано 3 знака равно, то есть строгое сравнение по типу данных, что в переменной num именно число, а не строка.
// Но конечно можно использовать и два знака равно чтобы было не строгое сравнение

const testNum = 60;

switch (testNum) {
  case 40:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно");
    break;
  case 60:
    console.log("Точно!");
    break;
  default:
    console.log("То что выполнится в любом случае если ничего не подойдет");
    break;
}

// Условия switch проверяет только строгим сравнением.
// Директива break обязательно, ведь без нее код пойдет дальше, даже если нарвется на правдивый case

const hamburger = true;
const fries = true;

if (hamburger && fries) {
  console.log("Я наелся");
} // Код выполнится, так как и первая константа и вторая равны true, условие в скобках выполнилось. Если хоть одно из них будет false, в консоль ничего не выведется

console.log(hamburger && fries); // true. Результат логических операций, это какое-то логические буллевое значение, true или false

/* Если же одно из блюд будет отсутствовать,  hamburger или fries будет со значением false, то в верхнем выражении у нас и выведется false
 */



const burgers = 5;
const frenchfries = 0;

if (burgers && frenchfries) {
  console.log("Я наелся");
} // Код НЕ выполнится, так как вторая константа будет преобразована в false, так как 0 в логическом контексте всегда ложь

console.log(burgers === 5 && frenchfries); // 0. Так как логическая И всегда возвращает первое ложное выражение. Есть поговорка для этих условий. && (И) всегда спотыкается на лжи, || (или) всегда спотывается на правде.
// P.S если же и в 1ом и во 2ом выражении будет true, то есть оба выражения будут правдивыми, вернется просто последнее выражение. Если в переменную frenchfries поставить от 1 до любого положительного числа, (ИЛИ ЖЕ СТРОКУ, ТО ЕСТЬ ТО ЧТО РАВНО true) вернется именно оно.

// в js есть динамическая типизация, когда один тип данных превращается в другой по такой или иной причине. в js есть 5 сущностей которые всегда превращаются в false. Все остальное будет true
// 1) 0
// 2) ''. (пустая строка, именно пустая) ' ' это уже не пустая, так как она с пробелом внутри
// 3) null. Когда чего-то просто не сущенствует
// 4) undefined. Когда что-то существует, не значение не имеет. Например существует переменная но у нее не задано значение
// 5) NaN. Not a Number, специальное значение которое показывает что это не число

const icecream = 2,
  cola = 1;

if (icecream === 3 && cola) {
  console.log("Все поели");
} else {
  console.log("Мы уходим, не хватает на всех"); // Будет выполнено
}




if (potato || milk || eggs) {
  console.log("хоть что-то из этого присутвует в магазине"); // Будет выполнено
} else {
  console.log("уходим из магазина, так как тут ничего нет");
}

// Оператор || (или) действует также как и оператор && (и) только наоборот останавливается найдя хоть одну "правду", то есть то что не false. Если false из этого все, то выводит последнюю ложь из данных.

console.log(potato || milk || eggs);

// ТЕСТ НА ПОНИМАНИЕ УСЛОВНЫХ ОПЕРАТОРОВ "И" И "ИЛИ"

// console.log(NaN || 2 || undefined); // 2. Первая правда в выражении

// console.log(NaN && 2 && undefined); // NaN.Первая ложь в выражении

// console.log(1 && 2 && 3); // 3. Последняя правда в выражении. Все из этого true

// console.log(!1 && 2 || !3); // false. последняя ложь в выражении. Сначала в первой части выражения оператор И находит первую false, потом решает false ИЛИ false (!3 === false)

// console.log(25 || null && !3); // 25. Первая правда в выражении

// console.log(NaN || null || !3 || undefined || 5); // 5. Первая правда в выражении

// console.log(NaN || null && !3 && undefined || 5); // 5. Первая правда в выражении

// console.log(5 === 5 && 3 > 1 || 5); // true. Первая правда в выражении

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!') // выполнится
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!') // выполнится
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!') // НЕ выполнится
// }