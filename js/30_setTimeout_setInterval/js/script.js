'use strict'

document.addEventListener('DOMContentLoaded', function () {

    /* В js есть синхронные операции которые выполняются сверху вних, то есть при считывании кода.
    А есть асинхронные операции выполняются не сразу, а с определенной задержкой
    
    О методах глобального объекта window мы и поговорим, это setTimeout и setInterval
    */

    /* Управление временем выполнения скриптов. Часто функции должны выполняться не сразу, а через какой-либо промежуток времени или вообще повторяться
    
    Для того чтобы запустить функцию через какой то промежуток времени есть конструкция под названием setTimeout  */



    const timerId = setTimeout(function () {
        console.log('hello! I showed up after 2 seconds');
    }, 2000);


    /* У фунцкии setTimeout такой синтаксис что сначала в параметры она принимает ту функцию которая должна запуститься через определенный промежуток времени, при чем она принимает именно объявление функции или ее название, в нашем случае тут анонимная функция, вторым ее параметром идет время чере  которое должна запуститься функция, время задается в миллисекундах. 2000 миллисекунд это 2 секунды */


    const timerId_2 = setTimeout(function (text, text_2) {
        console.log(text);
        console.log(text_2);
    }, 1000, 'hello Homer Simpson', 'I love u')

    /* setTimeout может принимать и второй, и третий аргумент, это уже аргумент для функции которую вызывают внутри setTimeout, аргументов может быть бесконечное множество как и у любой другой функции. Но первым аргументов всегда идет время через которое все запустится*/




    function logger() {
        console.log('Some text');
    }

    const timerId_3 = setTimeout(logger, 2000)


    /* в этот раз мы передали уже готовую функцию logger в параметры в setTimeout, так тоже можно. При чем ее мы не вызываем через круглые скобки, а просто передаем */


    /* Кстати зачем мы setTimeout постоянно передаем в переменную timerId? Ведь все работает и без нее 
     Когда мы передаем setTimeout или setInterval (скоро разберем) в переменную, мы записываем числовой идентификатор этого конкретного таймера. Определять куда - то определенные setTimeout нам нужно для того чтобы в случае чего останавливать их. Например как на сайтах появляются модальные окна, когда ты сделал то что надо было разрабу сайта, это окно больше не задалбывает тебя, то есть setTimeout сбрасывается и модалка больше не показывается
    */

    clearInterval(timerId_3) /* c помощью команды clearInterval мы просто удаляем конкретный setTimeout или setInterval  */


    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function () {
        const timer = setTimeout(function () {
            alert('i am annoying alert');
        }, 2000)
    })


    /* После клика по кнопке через 2 сек появится раздрадающее оповещение на сайте */

    /* Если мы хотим чтобы наш скрипт повторялся через определенное кол-во времени, а не просто 1 раз выполнился,
    нам уже нужна функция setInterval.Выглядит она точно также как и setTimeout, и принимает аргументы такие же и отменятся точно также через clearInterval */

    const btn_2 = document.querySelector('.btn_2');



    let timer; // делаем так чтобы переменная timer была глобальной, а не локальной, чтобы до нее смог достучаться clearInteval когда понадобиться ее остановить

    btn_2.addEventListener('click', function () {
        timer = setInterval(repeatFunction, 3000)
    })
    let i = 1; /* Счетчик i мы делаем глобальным потому что при каждом вызове функции repeatFunction переменная i будет сбрасывться на 0 и трех никогда не достигнет */

    function repeatFunction() {
        if (i === 3) {
            clearInterval(timer)
        }
        console.log('i will repeat every 3 sec');
        i++;
    }

    /* В данном примере мы сделали так что сообщение в консоль вывелось только 3 раза и все, setInterval был удален через clearInterval, благодаря условию и счетчику.  */


    /* Чем рекурсивный setTimeout лучше чем setInterval. рекурсивный setTimeout это когда setTimeout вызывают внутри setTimeout, то есть закончится внешний и начнется внутренний
    
    Если в setInterval будет сложная тяжелая функция, то при следующем повторении этой функции, setInterval не будет ждать назначенного ему времени, если задержка между повторениями 1 секунда, а функция выполняется например 3 секунды, то после завершения этой тяжелой функции перерыва в 1 сек не будет, setInterval подумает что эта 1 секунда уже прошла и начнет выполнения функции сразу же незамедлительно без перерывов
    
    В рекурсивном setTimeout такой проблемы нет
    */

    let id = setTimeout(function log() {
        console.log('example');
        id = setTimeout(log, 500)
    }, 1000)

    /* Данный рекурсивный setTimeout работает как setInterval, только без проблемы которую я описал выше, даже если функция будет очень большой и сложной, setTimeout все равно выждет 1 секунду прежде чем повториться */

    function myAnimation() {
        const elem = document.querySelector('.box');
        let position = 0;

        const id = setInterval(frame, 10);

        function frame() {
            if (position === 300) {
                clearInterval(id);
            }

            else {
                position = position + 1; // Квадритик будет двигаться со скоростью + 1 единица в установленный срок

                elem.style.top = position + 'px';
                elem.style.left = position + 'px';
            }
        }


    }


 




    /* Простейшая анимация передвижения квадратика по диагонали  */


})




