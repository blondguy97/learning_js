'use strict';

/* Рекурсия это когда функция вызывает сама себя */

function pow(x, n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * x;
    }

    return result;
}

/* Мы написали функцию по возведению числа в степень, в этом примере мы хотим получить 2 в 3 степени, то есть 
2 * 2 * 2 что должно нам давать число 8 */

console.log(pow(2, 3)); // 8. Сработало


console.log(pow(28, 1)); // 28. Если у нас n будет единицей, мы просто возвратим первый аргумент x


/* Таким образом мы возводим что-либо в степень */





/* Теперь напишем похожую функцию которая также будет возводить число в степень с помощью рекурсии*/


function pow_2(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow_2(x, n - 1);
    }
}

// В этой функции происходит рекурсия, тут функция вызывает саму себя в себе же

console.log(pow_2(2, 3));




/* Несколько терминов в Рекурсии

1) База Рекурсии - это число которое сразу приводит к завершению функции, в нашем случае это число 1

2) Шаг Рекурсии - запуск вложенной функции, каждый раз с другим, модифицированным значением. В нашем случае это минус 1

3) Глубина Рекурсии - общее кол-во вложенных вызовов вместе с самым первым

Если выбирать итеративный подход решения задачи (то есть цикл) или рекурсию, выгоднее выбирать цикл
но рекурсия обычно проще в написании чем цикл


Контекст выполнения - когда у нас запускается функция, внутри нее создается Контекст выполнения функции. Это спец. внутренняя структура данных, которая содержит инфу о вызове функции. Она включает в себя конкретное место в коде где выполняется функция, Локальные переменные, значение this (изучим позже) и многое другое.
*/



let students = {
    js: [{
            name: 'John',
            progress: 100
        },

        {
            name: 'Ivan',
            progress: 60
        }
    ],

    html: {
        basic: [{
                name: 'Peter',
                progress: 20
            },

            {
                name: "Ann",
                progress: 10
            }
        ],

        pro: [{
            name: "Sam",
            progress: 55
        }]
    }
};


/* Например у нас есть задача посчитать весь прогресс во всех массивах и объектах в этом большом объекте students, то есть объединить все цифры из свойств progress. Для этого можно воспользоватьcя либо циклом либо рекурсией   


Чтобы понять средний прогресс всех студентов в объекте. Нужно Первое - понять сколько вообще студентов имеется, Второе - общая сумма всех цифр из свойства progress, потом мы берем это число и делим на кол-во студентов*/



function getTotalProgressByIteration(data) { // Решение при помощи цикла
    let total = 0; // Общий прогресс куда мы будем складывать все цифры из прогресса студентов
    let students = 0; // Общее кол-во студентов 

    for (let course of Object.values(data)) {
        /* Object.values() - это метод который возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте. Порядок такой же как если пройтись по объекту циклом вручную. */
        if (Array.isArray(course)) {
            students = students + course.length;

            for (let i = 0; i < course.length; i++) {
                total = total + course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students = students + subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total = total + subCourse[i].progress;
                }
            }
        }
    }

    return total / students;

}


console.log(getTotalProgressByIteration(students));


const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.values(object1)); // ["somestring", 42, false]


/*  Array.isArray() - метод, который проверяет, является ли переданный аргумент массивом. Возвращает true, если является, и false — если нет. */


let arr = [1, 2, 3];
let arr_2 = {
    a: 1,
    b: 2
};

console.log(Array.isArray(arr)); // true

console.log(Array.isArray(arr_2)); // false



/* Наша задача посчитать здесь средний прогресс в этом большом объекте students, всех студентов, всех курсов
сделаем это с помощью цикла и с помощи рекурсии */








function getTotalProgressByRecursion(data) { // Решение при помощи рекурсии
    if (Array.isArray(data)) {
        let total = 0;


        for (let i = 0; i < data.length; i++) {
            total = total + data[i].progress;
        }

        return [total, data.length]
    } else {
        let total = [0, 0]

        for (let subData of Object.values(data)) {
            let subDataArr = getTotalProgressByRecursion(subData);

            total[0] = total[0] + subDataArr[0];
            total[1] = total[1] + subDataArr[1];

        }

        return total
    }
}

let result = getTotalProgressByRecursion(students)

console.log(result[0] / result[1]);