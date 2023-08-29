'use strict';

/* JS в основе своей является объектно-ориентированным языком. Главным в языке является объект который может содержать свойства, методы, любой тип данных */

'I am an ordinary string'; // Это простая строка, обычный примитив

'I am special string'.toUpperCase(); // Когда мы вызываем метод на строке, она становится уже объектом на время. Js оборачивает ее в объект, после модификаций возвращает ее обратно к примитиву

let str = 'some';

let strObj = new String(str);


console.log(typeof(str)); // string
console.log(typeof(strObj)); // object

/* Наглядный пример как js воспринимает строку и как тип данных строка и как тип данных объект */

let soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
}; // Прототип солдата 

let soldierJohn = {
    health: 100,

}; // Конкретный солдат

soldierJohn.__proto__ = soldier; // Устаревшая конструкция

console.log(soldierJohn.armor); // 100. объект получил свойство armor от прототипа soldier


Object.setPrototypeOf(soldierJohn, soldier);  /* То же самое что и 
soldierJohn.__proto__ = soldier; только современнее. Первое идет КОМУ мы устанавливаем прототип, а второе КАКОЙ мы устанавливаем прототип 
В реальной жизни обычно такое применяется например с модальными окнами, создается прототип модального окна с каким то базовым функционалом, а затем от него отпачковываются немного отличающиеся модальные окна, модифицирующие в себе ширину, цвет и так далее
*/

let ivan = Object.create(soldier); /* Есть и такой вариант. Читается так 
 мы создаем новый объект ivan и он будет наследовать свой прототип soldier со всеми его свойствами и методами */


ivan.sayHello();


soldierJohn.sayHello(); // Опять же объект soldierJohn взял из своего прототипа метод sayHello и его можно теперь использовать
