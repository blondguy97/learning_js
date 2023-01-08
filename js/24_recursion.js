'use strict';

/* Рекурсия это когда функция вызывает сама себя */

function pow(x, n) { 
    let result = 1; 
    
    for(let i = 0; i < n; i++) {
        result = result * x;
    }
    
    return result;
}

console.log(pow(28,3));// 21952. Сработало
console.log(pow(28,1));// 28. Если у нас n будет единицей, мы просто возвратим первый аргумент x


/* Таким образом мы возводим что-либо в степень */


function pow_2(x, n) {
    if(n === 1) {  /* Как и в предыдущем примере, если у нас n будет единицей, мы просто возвратим первый аргумент x */
        return x;
    }
    else {
        return x * pow_2(x, n - 1);
    }
} 

// В этой функции происходит рекурсия, тут функция вызывает саму себя в себе же

console.log(pow_2(2, 2));


/* Несколько терминов в Рекурсии

1) База Рекурсии - это случай который сразу приводит к завершению функции, это единица
То есть когда будет единица, рекурсия закончится

2) Шаг Рекурсии - запуск вложенной функции, каждый раз с другим, модифицированным значением

3) Глубина Рекурсии - общее кол-во вложенных вызовов вместе с самым первым

Если выбирать итеративный подход решения задачи (то есть цикл) или рекурсию, выгоднее выбирать цикл
но рекурсия обычно проще в написании чем цикл
*/




/* Object.values() - это метод который возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте. Порядок такой же как если пройтись по объекту циклом вручную. */


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
}

console.log(Array.isArray(arr)); // true

console.log(Array.isArray(arr_2)); // false



/* Наша задача посчитать здесь средний прогресс в этом большом объекте students, всех студентов, всех курсов
сделаем это с помощью цикла и с помощи рекурсии */



let students = {
    js: [{
        name: 'John',
        progress: 100
    }, 
    
    {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, 
        
        {
            name: "Ann",
            progress: 10
        }],

        pro: [{
            name: "Sam",
            progress: 55
        }]
    }
};


function getTotalProgressByIteration(data) { // Решение при помощи цикла
    let total = 0; // Общий прогресс куда мы будем складывать все цифры из прогресса студентов
    let students = 0; // Общее кол-во студентов 

    for(let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students = students + course.length;
            
            for(let i = 0; i < course.length; i++) {
                total = total + course[i].progress;
            }
        }
        else {
            for(let subCourse of Object.values(course)) {
                students = students + subCourse.length;

                for(let i = 0; i < subCourse.length; i++) {
                    total = total + subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
    
}


console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion(data) { // Решение при помощи рекурсии
    
}



