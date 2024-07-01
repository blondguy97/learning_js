'use strict';

document.addEventListener('DOMContentLoaded', function () {

    /* ФУНКЦИИ КОНСТРУКТОРЫ
    
    Функция по своей сути является объектом, и в нее можно записать какие то методы и свойства. Функции можно создавать через так называемые конструкторы
    
    */

    function User(name, age) {
        this.name = name;
        this.age = age;
        this.bold = false;
        this.human = `yes, ${this.name} is human`;
        this.hello = function () {
            console.log(`Hello ${this.name}`);
        }
    }; /* Таким образом создаем функцию конструктор которая ведет себя как объект и от нее мы можем отпачковывать новые функции задействуя ООП. Что такое this изучим в следующем уроке */

    const myName = new User('Yasha', 26); // Это уже не функция, а объект
    const herName = new User('Lika', 22);

    myName.hello(); /* Hello Yasha */
    herName.hello(); /* Hello Lika*/

    console.log(myName.human);

    console.log(myName['age']); /* 26 */

    User.prototype.isMarried = false; /* Прототипно добавляем новые свойства и значения
 функции-конструктору User. Прототипно созданное свойство будет наследоваться всеми потомками которые буду созданы через функцию-конструктор User */

    console.log(myName.bald); /* false 
 myName начало наследовать свойство bald от своей функции конструктора
 
 */


    console.log(myName);

    User.prototype.walk = function () {
        console.log(`Пользователь ${this.name} умеет ходить`);
    }; /* Прототипно добавляем новые методы функции-конструктору User */

    myName.walk(); /* Пользователь Yasha умеет ходить */



    /* Конструкторы нам нужны для создания новых однотипных объектов, например как новые пользователи сайта, товары в магазине, ролики на ютюбе, везде где есть шаблонизация
    Даже компоненты сайтов могут создавать таким образом, например на одной странице есть несколько слайдеров 
    , но они немного отличаются, в одном 5 слайдов, в другом 10, то есть именно за этим нам нужны эти параметры и аргументы в функциях конструкторах, чтобы создавать одновременно однообразные и отличающиеся функционалы
    То есть один раз создаем и настраиваем один большой прототип чего-то, а потом при вызове уже как хотим переделываем под что какие-то особенности
    */







    function Calculator() {

        this.read = function () {
            this.x = 3;
            this.y = 4;
        }
        this.sum = function () {
            return this.x + this.y;
        };
        this.mul = function () {
            return this.x * this.y;
        };

    }

    const calc = new Calculator();

    calc.read();

    console.log(calc.sum())
    console.log(calc.mul())


    /* Создайте функцию-конструктор Rectangle, которая принимает параметры width (ширина) и height (высота).
Создайте метод getArea, который вычисляет и возвращает площадь прямоугольника. */


    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.getArea = function () {
            console.log(this.width + this.height);
        }
    }

    let result = new Rectangle(5, 2); 

    result.getArea(); // Можно вызвать метод так. Добавив функцию конструктор в переменную


    new Rectangle(5, 2).getArea(); // Или так, вызвав метод у функции конструктора напрямую

});