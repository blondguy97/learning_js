'use strict';

const arr = [1, 2, 3, 4, 5, 10, 11];

console.log(arr.length); // 7. Это правильный ответ. Именно 7 элементов у нас находится в массиве arr. Если нужно узнать сколько именно элементов по порядку в массиве. то есть если считать что первый элемент имеет 0 значение, 2ой первое и прочее. То надо помнить, что свойство length это последний элемент в списке по количеству, плюс один. То есть на самом в массиве arr 6 свойств если считать первый элементв нулевым

arr.pop(); // Метод удаляет последний элемент из массива

console.log(arr); // [ 1, 2, 3, 4 ]

arr.push(10); // Метод добавляет последний элемент в массив

console.log(arr);  // [ 1, 2, 3, 4, 5, 10 ]


arr.shift(); // Метод удаляет первый элемент из массива

arr.unshift(10); // Метод добавляет первый элемент в массив

/* Данными методами добавления или удаления первых элементов в массиве не рекомендуется пользоваться, так как при это смешаются индексы всех остальных эдеметов в массиве, то есть 1 была по индексом под номером 0, а 2йка была под номером 1, методов sahift удалилии единицу, под индексои номером 0 уже стала 2йка, и там далее пошло смешение, то же самое при доьбавлении свойства */


// Переборы массивов. Они нужны для того чтобы с каждым элементом массива можно было сделать какое-то действие


const arr_2 = [1, 2, 3, 4, 5];


for (let i = 0; i < arr_2.length; i++) {
    console.log(arr_2[i]);
} // 1, 2, 3, 4, 5. Так выводятся элементы массива

for (let i = 0; i < arr_2.length; i++) {
    console.log(i);
} // 0, 1, 2, 3, 4. Так выводятся индексы элементов массива 


const arr_3 = [1, 2, 3, 4, 5, 'aa'];

for (let value of arr_3) {
    console.log(value);

} // 1, 2, 3, 4, 5. Так выводятся элементы массива с помощью специального цикла перебора массиво-подобных сущеностей, такие как строка, массив, псевдомассив


const arr_4 = [1, 2, 3, 4, 5];

arr_4.forEach(function(item, i, arr) {
    console.log(item);
    console.log(i);
    console.log(arr);
});


/* Метод forEach это функция же. И она принимает в себя другую функцию callback function, мы о ней говорили.И суть в том что данные действия это callback функции буду производится на каждом элементе массива. Такая callback functio может принимать в себя три параметра.
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
Обычно во всех случаях используется метод forEach. Но у метода for of есть один плюс
Там можно использовать инструкции break и continue*/

let str = prompt('Введите как-либо список через запятую');

let products = str.split(', '); // Создает массив на основании строки через опрееденный разделитель. Но разделитель нужно знать точный

let x = products.join('; '); // Мы склеиваем массив обратно в строку и делаем его через разделитель точку с запятой


console.log(x); 


