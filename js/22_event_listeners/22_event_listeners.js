"use strict";

let btn = document.querySelector("#btn");
let btn2 = document.querySelector(".anotherBtn");
let theLink = document.querySelector(".link");
let overlay = document.querySelector('.overlay');

let r_square = document.querySelector('.red-square');
let p_square = document.querySelector('.purple-square');

let wrapper = document.querySelector('.wrapper');
let circle = document.querySelector('.circle');



// С помощью метода addEventListener мы можем добавлять практически любое действие какое пользователь может сделать с объектом на странице, то есть кликнуть, навести курсор, убрать курсор, зажать, нажать, отпустить любую клавишу на клавиатуре, так далее

/* Есть несколько способов задать обработчик события элементу, 
1) Первое это задать прямо на html странице, прописать непосредственно как атрибут тегу, наподобии как мы задаем инлайновые css свойства, только тут мы добавляем приставку on к обработику события
	<button onclick="alert('i am interactive!')">Нажми меня</button>
2) Второе это написать в js элемент (который мы нашли через DOM и присвоили переменной), и также через on добавить событие и просвоить этому какую то функцию где и прописать что нужно сделать, или же присвоить уже готовую функцию которая была создана раннее
        btn.onclick = function() {
            alert('first click') // first click
        }
    В этом способе есть проблема, из-за которой надо избегать его. Если мы через этот способ этому же элементу зададим другое обработчик события, то старый сотрется и будет только новый, то есть заменится


        btn.onclick = function () {
            alert('second click') // second click
        } // Перезапишет предыдущую функцию


        А также проблема в том что если нам понадобиться удалить этот обработчик события, то мы сделать этого не сможем

    3) Третий же самый правильный и современный способ будет показан внизу

        btn.addEventListener('click', function() {
            alert('i am cool btn');
        });
    Здесь после выбранного элемента идем метод addEventListener, после чего в скобках пишем само действие которые будет выполнено, в этот раз без приставки on, а затем идет callback функция, внутри которой будут идти действия после совершения пользователем нажатия клавиши или другого события
    А также сюда может добавляться какая-то существующая функция

    Благодаря такому способу можно назначать несколько обработчиков событий на один элемент, они будут выполняться по очереди, как только одно действие совершилось, за ним будет идти сразу следующее
    
}

 */

/* Также в обработчиках событий есть сам объект событий, у него есть свои методы как и у любого другого объекта.
он передается параметром в callback функцию и идет после названия события, называться объект событий может как угодно, но обычно его называют e или event 
Самые важные методы у объекта которые чаще всего используются, это методы type и target
Через e.target мы получаем сам объект, на котором проводилось какое-то событие, и с ним мы можем производить нужные нам действия 

*/

btn.addEventListener('click', function (event) {
    console.log(event); // При клике на кнопку в консоль лог мы получим сам объект событий
});

btn.addEventListener('click', function (event) {
    console.log(event.target); // При клике на кнопку c помощью свойства target мы получаем ссылку на объект, которым было инициировано событие. Например, если событие произошло на поле ввода, мы получим ссылку на этот DOM элемент. В нашем же случае мы получаем ссылку на кнопку на которой произвели действие 

});

/* С помощью свойства target объекта event, у нас появляется куча возможностей, например перекрасить элемент, удалить его и прочее */


// r_square.addEventListener('click', function (event) {
//     event.target.remove(); // Например так мы наш красный квадрат кликнув по нему левой кнопкой мыши 

// });


/* Порой нам надо удалять обработчики событий с элементов, для этого есть метод removeEventListener()
Но для этого нам нужно использовать такую же функцию которую мы и назначали при помощи addEventListener 

Но для того чтобы повторить какую то функцию, придется вынести ее в отдельную переменную
Посмотрим это на примере вырхнего красного квадарата о котором я писал, там я напрямую задал функцию, а сейчас мы создадим отдельную функцию

*/

function delElement(event) {
    event.target.remove();
}

r_square.addEventListener('click', delElement); // Замечу что мы НЕ вызываем функцию, после события клика, то есть все без круглых скобок, мы лишь ссылкамся на функцию delElement



let i = 0;

function elem(event) {
    console.log(event.target);
    i++;
    if (i == 1) {
        p_square.removeEventListener('click', elem);
    }
}

p_square.addEventListener('click', elem);

/* таким образом для пурпурного квадрата мы создали событие клика при котором в консоль выводится ссылка на этот элемент, и через условие что клик был всего раз сделан, событие удаляется через обработчик событий removeEventListener. И все это мы передали через функцию elem. Так мы сказали что событие при клике клика должно происходить всего 1 раз


Также чтобы не городить конструкций с removeEventListener,
мы можем передать в аргументы функции опцию once: true чтобы событие выполнялось только 1 раз(но если нужно чтобы событие исполнилось больше 1 ого раза, придется городить)  */




/* Также есть важное понятие "Всплытие событий" не путать с "Всплытием переменных"

Всплытие событий - Это когда обработчик события работает на самом вложенном элементе, затем на его родителе и так далее и выше и выше

*/


function elemType(event) {
    console.log(event.target);
    console.log(event.type);
}



circle.addEventListener('click', elemType);
wrapper.addEventListener('click', elemType);


/* При клике на черный круг, в консоли у нас дважды появляется результ работы функции elemType, событие сработало на элементе который вложенный, то есть на круг, а потом по иерархии поднялось вверх и сработало уже на оболочке, wrapper
Но нужно заметить что так мы ссылаемся на элемент на котором изначально произошло событие то есть на circle, что может немного путать
*/

function currentElemType(event) {
    console.log(event.currentTarget);
    console.log(event.type);
}


circle.addEventListener('click', currentElemType);
wrapper.addEventListener('click', currentElemType);

/* Уже таким образом в консоль выводится сначала сам элемент на который кликнули, а уже потом его оболочка, wrapper.
Теперь отчетливо видно как событие "всплывает наверх"
*/


/* 

Иногда очень важно отменить стандартное поведение у элементов в браузере, типа перехода по ссылке, выделение текста, отправка формы  и тд
Для этого в js есть 2 способа

1) Устаревший вариант, в конце функции обработчика событий return false. Но этим никто уже не пользуется

2) метод preventDefault() у объекта event
Этот метод надо ВСЕГДА ставить в на чало функции, а затем уже писать то что мы просим у элемента
ПРИМЕР вНИЗУ
 */


theLink.addEventListener('click', function (event) {
    event.preventDefault();

    console.log('Я не буду работать как ссылка, так как у меня event.preventDefault()');
});