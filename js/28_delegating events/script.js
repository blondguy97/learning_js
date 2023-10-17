'use strict'

/* Поговорим про свойство classList и делегирование событий*/



document.addEventListener('DOMContentLoaded', () => {

    const btns = document.querySelectorAll('button');

    /* Берем со страницы ВСЕ кнопки через querySelectorAll, получаем псевдомассив */

    /* чтобы обратиться к списку классов надо обратиться к свойству classList     */




    console.log(btns[0].classList.item(0)); // blue. Метод показывает классы по индексу, 1ый, второй и так далее.

    console.log(btns[0].classList.add('red')); // Через Метод add можем добавлять классы.  
    console.log(btns[0].classList.add('red', 'big')); // Через Метод add можем также добавлять и несколько классов.  

    console.log(btns[0].classList.remove('blue')); // Через Метод remove можем удалять классы
    console.log(btns[0].classList.toggle('blue')); // Через Метод toggle можем переключать классы. То есть если этот класс есть на элементе он будет убран, есть нет - добавлен



    /* Проверку наличия или отсутствия классов мы часто будем проверять в условиях, можно было бы это сделать через метод item, но там надо точно знать позицию класса по индексу, для таких случаев у нас есть метод contains, он показывает просто есть такой класс у тега или нет, неважно на какой позиции он находится. Если определенный класс есть то возвращается true, если нет, то конечно false */


    if (btns[1].classList.contains('blue')) {
        console.log('Класс blue у тега есть');
    } else {
        console.log('Класса blue у тега нету'); // Выведется это, у 2ой кнопки странице нет класса blue
    }


    console.log(btns[1].classList.add('blue')); // Через Метод add можем добавлять классы.  


    if (btns[1].classList.contains('blue')) {
        console.log('Класс blue у тега есть'); // Теперь выведется это, мы добавили класс blue тегу
    } else {
        console.log('Класса blue у тега нету');
    }


    btns[1].addEventListener('click', function () {
        if (btns[1].classList.contains('blue')) {
            btns[1].classList.remove('blue')
        } else {
            btns[1].classList.add('blue')

        }

        // Таким образом мы через события клика можем переключать класс blue у тега, проверяя есть он у тега или нет
    })

    btns[1].addEventListener('click', function () {
        btns[1].classList.toggle('blue')

        /* Это абсолютно то же самое что и в примере сверху, то есть мы без условий переключаем класс blue у тега.
        Можно использовать и так и этак, но порой 1ый вариант предпочтительнее для задания доп.условий */
    })



    /* Существует такое свойство как className, оно устаревшее */


    console.log(btns[0].className); // Оно выводит список классов как одну строку. Но вместо этого обычно используется classList. Здесь мы взяли псевдомассив со всеми кнопками, по индексу выбрали самую первую и вызвали свойство classList




    /* Делегирование событий. Бывает что на странице у нас много кнопок и нам надо чтобы например при клике на любую из них вызывалось одно и то же событие. Мы конечно можем повесить это событие на каждую кнопку отдельно. Но это долго, к тому же если новые кнопки будут добавлятьс вручную или динамически, короче любым способом, событий уже не будет. надо будет заново каждой прописывать одно и то же событие. В чем суть делегирования событий?
    Мы берем родителя всех кнопок и назначаем событие клика на него же. Пример ниже     */

    const wrapperOfBtns = document.querySelector('.btn-block');


    wrapperOfBtns.addEventListener('click', function (event) {
        if (event.target.tagName == 'BUTTON') {
            console.log('ok');
        }
    })
    /*
       Здесь мы сделали вот что. Добавили событие клика обертке всех кнопок на странице, и задали условие что если у свойства event.targer tagName будет BUTTON (Они пишутся капсом) то в консоль будет выводится сообщение ok.  
      Также мы можем проверять не только tagName, но и определенные классы, nodeName и так далее
*/
    wrapperOfBtns.addEventListener('click', function (event) {
        if (event.target.classList.contains('blue')) {
            console.log('i am blue');
        }
    })

    /*     Так мы выбираем только те кнопки, у которых есть класс blue 
        Таким образом мы делегируем события с родителя на потомков. И при добавлении новых кнопок или чего бы то ни было, к ним будет применятся все то же что и к остальным
         */


 

    const btn = document.createElement('button');
    btn.classList.add('green');
    wrapperOfBtns.append(btn);


   

    /* Так мы динамически создали зеленую кнопку и к ней будет применятся все то же что и к остальным */
    

   wrapperOfBtns.addEventListener('click', function(event) {
        if(event.target.matches('button.green')) {
            console.log('I am button with green bg');
        }
    })

/* через метод matches у event.target мы можем уточнить что нам нужно конкретные элементы с тегом button и классом green */


})
