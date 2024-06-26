'use strict';

document.addEventListener('DOMContentLoaded', function () {


    /* Что такое контекст вызова функции 
    
    This - это то, что окружает функцию и в каких условиях она вызывается
    
    Функция может вызываться четыремя способами, и в каждом контекст вызова отличаеться  */

    /*  1) Просто вызов нашей функции 
          2) Контекст this у методов объектов это и будет этот самый объект
          3) this в функциях-конструкторах и классах это новый экземпляр объекта, то есть того нового отпачковывающегося объекта от одной большой функции конструктора. То есть this всегда будет ссылаться
          на новый объект который создаться в будущем через конструкцию new
          4) Ручное присвоение this любой функции. 

      */


    function showThis() {
        console.log(this);
    }

    showThis();
    /* Если у нас НЕ включена строгая директива "use strict", то в консоль мы получаем глобальный объект window. 
       но если "use strict" будет ВКЛЮЧЕН, то мы получим undefined */


    function showThis(a, b) {
        console.log(this);

        function sum() {
            console.log(this); // Контекст все равно будет либо window, либо undefined. а зависимости от директивы "use strict", даже если функция вызывается внутри функции
            return a + b; /* Происходит замыкание функции, и функция sum не найдя внутри себя параметры a и b находит их в родительской функции showThis и считает сумму этих параметров */
        }

        console.log((sum()));

    }
    showThis(4, 5);

    const obj = {
        a: 20,
        b: 15,
        sum: function () {
            function shout() {
                console.log(this);
            }
            shout()
        }
    }

    obj.sum();



    function User(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.hello = function () {
            console.log(`Hello ${this.name}!`);
        }

    }; // функция конструктор, создает новые объекты при вызове. Внутри функции конструктора контекст вызова this для всех методов и свойство будет только что созданный новый объект. То есть вместо this можно мысленно вставлять наш новый объект который мы создадим, отпачковав от функции конструктора, а в те значения которые идут справа от присваивания, те же name, age, буду подставлены значения которые мы передадим в параметры при создании нового объекта

    let newGuy = new User('Jake', 26);

    newGuy.hello()


    function sayName() {
        console.log(this);
        console.log(this.name);
    } /* Задача сделать так чтобы когда функция sayName запускалась, this был не window или undefined как обычно, а именно ссылаться на объект user, чтобы name (в нашем случае) бралось из объекта user и this ссылался также на объект user   

    Пример:
    
    function Person(name) {
        this.name = name;
    }

    const john = new Person('John');
    * this указывает на объект john *
    
    */

    let user = {
        name: 'John'
    };


    sayName.call(user);
    sayName.apply(user); /* С помощью этих двух методов которые мы использовали на функции sayName, мы передали ему контекст объекта user. То есть попросили использовать его данные, то есть его свойства и методы */

    /* и call и apply выполняют одну и ту же функцию, присваивают контекст вызова функции, но разница естественно есть 
    Разница начинается тогда, когда функция принимает дополнительные аргументы, эти аргументы конечно надо куда то передать
    */

    function sayName_2(surname) {
        console.log(this);
        console.log(this.name + ' ' + surname);
    } /* Задача сделать так чтобы когда функция sayName запускалась, this был не window или undefined как обычно, а именно ссылаться на объект user, чтобы name (в нашем случае) бралось из объекта user и this ссылался также на объект user   */



    sayName_2.call(user, 'Johnson'); /* в call аргументы передаются через запятую, в качестве строки */
    sayName_2.apply(user, ['Johnson']); /* в apply аргументы передаются через запятую, в качестве массива */


    /* Это были два способа ручного присвоения контекста, есть еще и третий под названием bind, он создает уже новую функцию связанную с определенным контекстом */


    function count(num) {
        return this * num;
    }

    let double = count.bind(2); /* Создаем связанную функцию. в переменную double передается функция count, и с помощью bind в скобках мы пишем тот самый this, то есть у функции double теперь контекст вызова это 2 */

    console.log(double(10));  // вызываем функцию и в качестве аргумента в num передаем 10, в итоге учитывая контекст вызова получаем цифру 20





    let btn_1 = document.querySelector('.first-btn');

    btn_1.addEventListener('click', function () {
        console.log(this); /* Мы хотим посмотреть чему будет равен this если мы применим его прямо на нашем элементе */
        this.style.backgroundColor = 'lightgreen'; /* По клику присваиваем кнопке цвет заднего фона зеленый, только вместо обычного event.target используем this */
    })

    /* Получаем в консоль эту же самую кнопку из верстки. Контекст вызова будет являтся сам же элемент элемент на котором произошло событие. This тут работает также как и event.target. Так работает если колбэк функция вызывалась классически, а не была стрелочной, у них все работает иначе */


    /* В обработчиках событий когда мы используем синтаксис через обычную НЕ стрелочную функцию, то мы имеем доступ к this, это тот же самый элемент на котором вызывался обработчика события, то же что и event.target?
    при использовании стрелочной функции контекст this теряется и он будет либо undefined либо window, зависит от директивы use strict.
    Если же все же хотим использовать стрелочную функцию, то просто используем event в параметрах функции и далее event.target
    */

    /* У стрелочной функции НЕТ своего контекста вызова, она будет искать его у своего родителя */

    let obj_3 = {
        num: 5,
        sayNumber: function () {
            let say = () => {
                console.log(this.num);
            }

            say();
        }
    };

    obj_3.sayNumber();
 

    let btn_2 = document.querySelector('.second-btn');

    btn_2.addEventListener('click', () => {
        this.style.width = '100px';
    });

    /* тут уже эти выкрутасы с this не сработают, из-за стрелочной функции будет ошибка так как у нее нет своего контекста вызова */ 


    btn_2.addEventListener('click', (event) => {
        event.target.style.width = '200px';
    });

    /* А вот так работать уже будет, так как вместо this мы используем объект event и его свойство target */

});