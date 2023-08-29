'use strict';

// Функция - это блок программного кода на языке JavaScript, который определяется один раз и может выполняться, или вызываться, многократно.

function showMessage() {
    console.log('hello');
}

showMessage(); // Чтобы вызвать пользоваться функциями, всегда необходимо помнить о том что их надо вызывать. Функции следует называть глаголом с припиской того над чем выполняется действие. GetName, showWindow. Есть и анонимные функции, без имени, они выполняются только один рази больше нигде не используются

function test(text) {
    console.log(text);
}

test('hello boy');

// В скобки функции можно записывать параметры в виде переменных  и использовать их в блоке кода, а затем при вызове функции писать в скобках аргументы функции и получается прелесть в том что впри каждом новом вызове функции можно подставлять разные данные и получать различные результаты работы одной и той же функции. Параметров и аргументов функций можно добавлять бесконечно.

function test_2() {
    let num = 20;
}

console.log(num); // Если бы объявляем переменную внутри функции, снаружи она становится недоступной, это называется локальными переменными.


let x = 20;

function test_3(text) {
    console.log(text);
    x = 22;
}
test_3('hi');

console.log(x); // Функции легко могут коммуницировать с глобальными переменными, то есть доставать снаружи переменные и внутри себя даже изменять их.
// Кстати, если добавить let, var или const к переменной x внутри функции, то переменные x внутри функции и снаружи функции, станут совершенно разными переменными, глобальной и локальной. Хоть и с одним именем, если же использовать какую либо переменную внутри функции, когда будет выполняться код, она будет сканировать всю функцию в поиске этой самой переменной. Если она ее не находит, она выходит из функции и начинает искать эту переменную уже в глобальном окружении, и если находит одноименную переменную, использует уже ее значение.





function calc(a, b) {
    return (a + b);
}

console.log(calc(2, 5));
console.log(calc(5, 5));
console.log(calc(10, 2));
console.log(calc(11, 4));
// Ключевое слово return позволяет функции вернуть наружу что-то, какое-то значение. Как в примере выше, то есть здесь результатом работы данной функции будет сумма a и b. Когда функция доходит внутри себя до слова return, следующие инструкции внутри блока кода, буду недосягаемы. после return нет смысла что-то писать. Функция после return заканчивается. Код становится unreachable, то есть недосягаемым

function ret() {
    let num = 50;
    return num;
}

let anotherNum = ret();

console.log(anotherNum); // Получаем 50, как и в локальной переменной num в функции ret, потому что функция возвращает именно ее наружу.

// Есть несколько видов функций
// 1) Function declaration. Классическая запись функции, как мы писали выше. Ее особенность в том что ее можно вызвать еще до того как она была создана. 
// 2) Function expression (функциональное выражение) ее синтаксис будет ниже. (для примера) Такая функция присваивается переменной. В противовес предыдущей функции, ее можно использовать только тогда после того как она была создана
// 3) Стрелочные функции (самый современный синтаксис). Она не имеет своего контекста вызова (об этом будет в уроках позже) они более компактны и элегантны, а еще при желании их можно записать еще компактнее, если надо, погугли


let logger = function () {
    console.log('i am Function expression');
}; // Function expression

logger(); // i am Function expression

let something = (a, b) => {
    return a + b;
}; // Стрелочная функция


let something_2 = (a, b) => {
    console.log(`i love ${a} and ${b}`);
}; // Стрелочная функция

something_2('icecream', 'burgers'); // i love icecream and burgers

let something_3 = (a, b) => {
    console.log(a + b);
}; // Стрелочная функция

something_3(5, 5); // 10



//  Еще раз про важность слова return в функциях. Любая функция может вернуть что-то как результат своей оработы, а может и ничего не возвращать. Зависит от задачи которую она решает

const usdCurr = 28;
const eurCurr = 32;
const yenCurr = 15;

function convert(amount, course) {
    return amount * course;
}


const discount = 0.9;

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(100, yenCurr)); // функция convert с помощью слова return отдает значение которое создалось в блоке кода. amount умножается на course. Результат умножения и есть то что возвращает фукнция convert. Чтобы дать функции какие-либо реальные цифры для результата, необходимо вызвать ее и добавить 2 аргумента которые передадутся в параметры функции и будет результат. Далее в функции promotion мы передает только один параметр, "result", а затем при вызове этой самой функции в качестве аргумента мы передает вызов функции convert с уже заданными аргументами.

let res = convert(100, yenCurr);

promotion(res); // Часто бывает и так, что создают какую-то промежуточную переменную, как тут у нас res и туда передают вызов нужной функции, в нашем случае функцию convert, а уже затем в аргументе promotion мы передаем просто переменную res. Без Скобок, так как код посчитает что это вызов функции. а вызов функции уже и так случился когда функцию convert передавали в переменную res

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return;
        }
    }
    console.log('Этот код не будет выполнен, потому что функция полностью завершила свое выполнение после слова return');
}

test();





function doNothing() {

}

doNothing(); 


console.log(doNothing() === undefined); // true. Все функции всегда хоть что-то возвращают, даже когда в функции ничего нет, возвращается undefined


/* В итоге надо запомнить, что если функция должна вернуть какой-то результат для дальнейшей работы с ним, нужно использовать ключевое слово return, если же нет, и результат нам нужен только единожды, то использовать return необязательно */


/* 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.



function something(someName) {
    return `hello mr ${someName}!`
}

something('yakov')

let res = something('yakov');

console.log(res); */




/* 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].


function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

let x = returnNeighboringNumbers(3) // [2, 3, 4]

console.log(x);

*/




// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

function getMathResult(num_1, num_2) {
    if (typeof num_2 !== 'number' || num_2 <= 0) {
        return num_1;
    }

    let str = "";

    for (let i = 1; i <= num_2; i++) {
        if (i === num_2) {
            str = str + `${num_1 * i}`;
        } else {
            str = str + `${num_1 * i}---`;

        }
    }

    return str;

}

console.log(getMathResult(5, 3));


