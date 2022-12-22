'use strict';

const arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5. Это правильный ответ. Именно 7 элементов у нас находится в массиве arr. Если нужно узнать сколько именно элементов по порядку в массиве. то есть если считать что первый элемент имеет 0 значение, 2ой первое и прочее. То надо помнить, что свойство length это последний элемент в списке по количеству, плюс один. 

arr.pop(); // Метод удаляет последний элемент из массива

console.log(arr); // [ 1, 2, 3, 4 ]

arr.push(10); // Метод добавляет последний элемент в массив

console.log(arr);  // [ 1, 2, 3, 4, 5, 10 ]


arr.shift(); // Метод удаляет первый элемент из массива [ 2, 3, 4, 5 ]

arr.unshift(44); // Метод добавляет первый элемент в массив[ 44, 1, 2, 3, 4, 5 ]

/* Данными методами добавления или удаления первых элементов в массиве не рекомендуется пользоваться, так как при это смешаются индексы всех остальных эдеметов в массиве, то есть 1 была по индексом под номером 0, а 2йка была под номером 1, методов shift удалили единицу, под индексом номером 0 уже стала 2йка, и там далее пошло смешение, то же самое при добавлении свойства */


// Переборы массивов. Они нужны для того чтобы с каждым элементом массива можно было сделать какое-то действие


const arr_2 = [1, 2, 3, 4, 5];


for (let i = 0; i < arr_2.length; i++) {
    console.log(arr_2[i]);
} // 1, 2, 3, 4, 5. Так выводятся элементы массива

for (let i = 0; i < arr_2.length; i++) {
    console.log(i);
} // 0, 1, 2, 3, 4. Так выводятся индексы элементов массива 


const arr_3 = [1, 2, 3, 4, 5];

for (let value of arr_3) {
    console.log(value);

} // 1, 2, 3, 4, 5. Так выводятся элементы массива с помощью специального цикла перебора массиво-подобных сущностей, такие как строка, массив, псевдомассив




const arr_4 = [1, 2, 3, 4, 5];

arr_4.forEach(function(item, i, arr) {
    console.log(item);
    console.log(i);
    console.log(arr);
});


/* Метод forEach это функция же. И она принимает в себя другую функцию callback function, мы о ней говорили.И суть в том что данные действия это callback функции буду производится на каждом элементе массива. Такая callback function может принимать в себя три параметра.
(сразу скажу что называть можно их как угодно) 
1) item - Это каждый элемент массива. В нашем случае 1, 2, 3, 4, 5
2) i - номер по порядку, начиная с 0. В нашем случае 0, 1, 2, 3, 4
3) arr - ссылка на тот массив который мы перебираем. В нашем случае 5 раз выведется весь массив arr_4

*/

let arr_5 = [1, 2, 3, 4, 5];

arr_5.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

/* Когда использовать метод forEach, а когда for of?
Обычно во всех случаях используется метод forEach. Но у метода for of есть один плюс - 
В методе for of можно использовать инструкции break и continue*/

let str = prompt('Введите как-либо список через запятую');

let products = str.split(', '); // Создает массив на основании строки через определенный разделитель. Но разделитель нужно знать точный

let x = products.join('; '); // Мы склеиваем массив обратно в строку и делаем его через разделитель точку с запятой


console.log(x); 

let arrSort_1 = ['ss', 'aaa','zzz'];

let res_1 = arrSort_1.sort();

console.log(res_1);/*  [ 'aaa', 'ss', 'zzz' ] все сортируется по порядку 
метод sort сортирует все как строки*/


let arrSort_2 = [11, 4, 2, 1, 5];

let res_2 = arrSort_2.sort();

console.log(res_2);/*  [ 1, 11, 2, 4, 5 ] все отсортировалось не так как мы думали, метод метод sort сортирует все как строки, то есть по первой цифре, потом по второй и так далее, помним об этом. Но это можно поправить  */

/* Псевдомассивы, это объект структура которого совпадает со структурой массива и очень похож на массив но такого "массива" не будет методов, ни sort, ни pop, ни shift - никаких. Псевдомассивом мы можем считать массив элементов со страницы.  */