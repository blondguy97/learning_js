"use strict";

let btn = document.querySelector("#btn");
let btn2 = document.querySelector(".anotherBtn");
let theLink = document.querySelector(".link");
let overlay = document.querySelector('.overlay');

// С помощью метода addEventListener мы можем добавлять практически любое действие какое пользователь может сделать с объектом на странице, то есть кликнуть, навести курсор, убрать курсор, зажать, нажать, отпустить любую клавишу на клавиатуре, так далее

/* Есть несколько способов задать обработчик события элементу, 
1) Первое это задать прямо на html странице, прописать непосредственно как атрибут тегу, наподобии как мы задаем инлайновые css свойства, только тут мы добавляем приставку on к обработику события
	<button onclick="alert('i am interactive!')">Нажми меня</button>
2) Второе это написать в js элемент, и также через on добавить событие и просвоить этому какую то функцию где и прописать что нужно сделать, или же присвоить уже готовую функцию которая была создана раннее
        btn.onmouseover = function() {
            alert('im clicked')
    В этом способе есть проблема, из-за которой надо избегать его. Если мы через этот способ этому же элементу зададим другое обработчик события, то старый сотрется и будет только новый, то есть заменится
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
он передается параметром в callback функцию и идет после назавания события, называться объект событий может как угодно, но обычно его называют e или event */

function deleteElement(e) {
  e.target.remove();
}
theLink.addEventListener("click", deleteElement);

/* Например таким образом мы можем кликом удалить элемент со страницы    */



let i = 0;
function delElem() {
    i++;
    if(i == 2) {
        btn.removeEventListener('click', delElem);
    }
    else {
        alert('i am clicked just one time');
    }
}

btn.addEventListener('click', delElem);


// Таким образом как выше, мы можем указывать метод removeEventListener, чтобы при каком-либо условии
// вызывать его чтобы действие не повторялось более одного или нескольких раз, по усмотрению




/* Всплытие событий
Это когда обработик события работает на самом вложенном элементе, затем на его родителе и так далее и выше и выше */


/* Отменя стандартного поведения в браузере
Например чтобы при нажатии на ссылку ничего не открывалось, это можно осуществить с помощью event.preventDefault() */


let theLink_2 = document.querySelector(".link-2");



theLink_2.addEventListener('click', function(event) {
    event.preventDefault();

   console.log(event.target);  
});

// У объекта event есть очень важный и нужный метод preventDefault();
// Он отменяет стандартные действия браузера типо перехода по ссылке, выделение текста и тд
// Этот метод надо ВСЕГДА ставить в начало функции, а затем уже писать то что мы просим у элемента


// Также чтобы не городить конструкций с removeEventListener,
// мы можем передать в аргументы функции опцию once: true чтобы событие выполнялось только 1 раз (но если нужно чтобы событие исполнилось больше 1ого раза, придется городить)
