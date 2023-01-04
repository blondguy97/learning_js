'use strict';

let num = 5; 

function logNumber() {
    console.log(num);
}

num = 6;

logNumber(); /*  6. 
Из-за того что фукнция объявлена как function declaration, она была создана еще до того как код начал построчно выполняться интерпретатором. Затем код считал сверху вниз, что переменная num имеет значение числа 5, затем была переопределена на значение числа 6, и в функцию записалось уже актуальное значение, то есть фукнция была вызвана уже на момент измененной функции num

Лексическое окружение
У каждой функции, блока кода и скрипта есть связанное с ним техническое окружение 
У Лекс. окружения есть 2 вида

1) Внутреннее Лекс. окружение
Это объект, где как свойства хранятся все локальные переменные функции

2) Внешнее Лекс. окружение, то что соответствует внешним переменным, снаружи

Надо помнить что любая переменная это свойство объекта лексического окружения
Лекс. окружение это технический объект, напрямую взаимодействовать мы с ним не можем, его работу контролирует интерпретатор (браузер)

ФУНКЦИЯ ВСЕГДА ПОЛУЧАЕТ ТЕКУЩЕЕ(АКТУАЛЬНОЕ) ЗНАЧЕНИЕ ВНЕШНИХ ПЕРЕМЕННЫХ, ИХ ПОСЛЕДНЕЕ ЗНАЧЕНИЕ

Каждый вызов функции это создание нового лексического окружения со своими специфичными для этого вызова локальными и внешними параметрами

*/

function createCounter() {
    let counter = 0;

    let myFunction = function(){
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

let increment = createCounter();

let c1 = increment();

let c2 = increment();

let c3 = increment();

console.log(c1, c2, c3);