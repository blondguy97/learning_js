'use strict'

document.addEventListener('DOMContentLoaded', function () {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabcontainer');


    function hideTabContent() {
        tabsContent.forEach(function (item) {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(function (tab) {
            tab.classList.remove('tabheader__item_active');
        })
    }





    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent()
    showTabContent()


    /* Что за параметр (i = 0) у функции showTabContent??  
    Это фича стандарта ES6, то есть параметр по умолчанию. Дословно это значит что если функция вызовится без аргумента, автоматически подставится аргумент 0. То есть в нашем случае первый таб на странице. Если же функция вызыватся с аргументом, то параметр по умолчанию игнорируется    */


    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        /* Выносим event.target в отдельную переменную 
              чтобы 300 раз не писать одно и то же */

        if (target.classList.contains('tabheader__item')) {
            tabs.forEach(function (item, i) {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    // Timer

    /* Чтобы написать код таймера на странице, надо понять свой алгоритм действий

    1) Мы должны создать функцию которая должна будет устанавливать наш таймер, то есть получать элементы со страницы и что то с ними делать
    2) Мы должны создать функцию которая будет определять разницу между временем, то есть определять создать какой-то дедлайн, и время которое установлено у пользователя и найти разницу во времени и именно эту разницу отображать в таймере
    3) Мы должны создать функцию которая будет заниматься обновлением таймера, то есть обновлять его каждую секунду
    
    */

    const deadLine = 'Dec 25, 2023, 00:00'; /* Инициализируем дедлайн, допустим 25 декабря 2023 */

    function getTimeRemaining(endTime) { // Создаем функцию для определения разницы во временем между нашим текущим временем и дедлайном

        const ms = Date.parse(endTime) - Date.parse(new Date()); // Вычисляем разницу по времени между нашим дедлайном и нашим текущим временем в миллисекундах
        const days = Math.floor(ms / (1000 * 60 * 60 * 24)) /* C помощью этого выражения получаем сколько суток от нынешнего дня у нас осталось до дедлайна  */
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24); /* C помощью этого выражения получаем сколько часов  от нынешнего дня у нас осталось до дедлайна. Здесь в конце выражения ставим оператор остатка от деления %, то есть "хвостик" от кол-ва дней, например осталось 50 часов, применяем оператор остатка от деления, получается 48 часов, то есть 2ое суток, и оператор остатка возвращает 2 часа оставшиеся. Часы не должны быть больше чем 24 часа   */

        const minutes = Math.floor((ms / 1000 / 60) % 60); /* C помощью этого выражения получаем сколько минут  от нынешнего дня у нас осталось до дедлайна. Здесь мы делим миллисекунды на секунды, а потом еще на минуты, а затем как и в предыдущем примере применяем оператор остатка от деления, и отбрасывая все лищнее оставляем ТОЛЬКО минуты. "Хвостик" не должен быть больше чем 60 минут  */
        const seconds = Math.floor((ms / 1000) % 60); /* C помощью этого выражения получаем сколько секунд от нынешнего дня у нас осталось до дедлайна. "Хвостик" не должен быть больше чем 60 секунд */

        return {
            'total': ms,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        } // Из функции getTimeRemaining возвращаем объект
    }

    function setClock(selector, endTime) { // Создаем функцию для установки часов

        const timer = document.querySelector(selector); // Подставляем сюда параметр, а не конкретный селектор, чтобы иметь возможно в будущем переиспользовать данную функцию для возможных другие таймеров
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds'); // Получаем все нужные элементы со страницы по id

        const timeInterval = setInterval(updateClock, 1000) // в переменную timeInterval передаем setInterval в котором будет функция updateClock, которая будет запускаться каждуе 1000 миллисекунд, то есть 1 секунду

        updateClock(); // Запускаем функцию updateClock сразу же, чтобы на странице он сразу работал, а не через секунду как задано в setInterval, потому что при обновлении будут цифры которые в верстке, и только через секунду начнется правильный обратный отсчет. Это функция инициализации, один раз она сработает. а зачем уже спокойно будет работать setInterval и обновлять таймер каждую секунду

        function updateClock() { // Создаем функцию для обновления нашего таймера каждую секунду
            const remainingTime = getTimeRemaining(endTime)
            /*  Передаем также параметр, а не конкретную переменную deadline которая у нас есть, чтобы также сделать функцию setClock универсальной
                       Теперь в переменной remainingTime, у нас результат работы функции getTimeRemaining, результат ее работы это объект с разными свойствами, такие как days, hours и так далее  */

            days.innerHTML = remainingTime.days, // Кол-во дней которое нам нужно отобразить на странице
                hours.innerHTML = remainingTime.hours, // Кол-во часов которое нам нужно отобразить на странице
                minutes.innerHTML = remainingTime.minutes, // Кол-во минут которое нам нужно отобразить на странице
                seconds.innerHTML = remainingTime.seconds; // Кол-во секунд которое нам нужно отобразить на странице


            if (remainingTime.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = '<i style="color: red;">0</i>',
                    hours.innerHTML = '<i style="color: red;">0</i>',
                    minutes.innerHTML = '<i style="color: red;">0</i>',
                    seconds.innerHTML = '<i style="color: red;">0</i>';
            } // Создаем условие при котором если время в таймере уже равно нулю или идет в отрицательную сторону, то таймер уже не обновляем, просто останавливаем, а также в переменные через innerHTML добавляем нули, и теперь таймер точно не пойдет в обратную сторону 
        }
    }

    setClock('.promotion__timer .timer', deadLine)




    // Modal window

    const modalOpen = document.querySelectorAll('[data-open-modal]');
    const modalClose = document.querySelector('[data-close-modal]');

    const modalWindow = document.querySelector('.modal');

    modalOpen.forEach(function (item) {
        item.addEventListener('click', openModal)
    })

    function openModal() {
        modalWindow.classList.add('show');
        document.body.style.overflow = 'hidden'; // не позволяем прокручиваться странице пока модальное окно включено 

        clearTimeout(modalTimerId); /* Добавляем отключения автовыскакивания модального окна при условии что пользователь открыл его вручную */


    } /* Запихиваем весь фунционал открытия модального окна в отдельную функцию чтобы не повторять код постоянно */

    function closeModal() {
        modalWindow.classList.remove('show');
        document.body.style.overflow = 'initial';
    } /* Запихиваем весь фунционал закрытия модального окна в отдельную функцию чтобы не повторять код постоянно */


    modalClose.addEventListener('click', closeModal)


    modalWindow.addEventListener('click', function (event) {
        if (event.target == modalWindow) {
            closeModal()

        } /* Таким образом мы сделали что при клике на подложку, то есть затемненную часть за модальным окном, модалка закрывается. То есть необязательно жать крестик для закрытия. Для этого ставим условием что событие клика произошло конкретно на подложке (в которой и есть сама модалка) то все закрывается и страница листается как обычно*/
    })


    /* Также есть возможность закрытия модалки по нажатию определенной клавиши   */



    document.addEventListener('keydown', function (event) {
        if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal()
        }
    })

    /* Таким образом по нажатию клавиши Escape модалка закрывается, к тому же в условии проверяем что модальное окно открыто и только тогда выполняем функцию closeModal, а не просто так ее вызываем без надобности
    
    (Коды остальных кнопок можно найти в интернете)
    
    */



    /* Часто бывает что нужно чтобы модалка вызывалась через какое то время проведенное на странице */

    // const modalTimerId = setTimeout(openModal, 5000);


    /*  Модалка откроется самостоятельно через 5 секунд, после того как пользователь зашел на сайт.
       
    
       Но если пользователь сам кликнул на модалку перед тем как она автоматически открылась и уже посмотрел что там, то мы можем отменить действия setTimeout прописав в функции открытия модалки clearTimeout(modalTimerId);
    */



    // Classes for cards

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            /* Добавляем в конструктор все данные которые есть в карточке, то есть путь к картинке, ее альт, заголовок карточки, ее описание и цену */
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector); // Этим свойством будем вызывать селектор-родитель внутрь которого мы будем помещать карточку
            this.price = price;
            this.staticPriceOfGrivna = 27; // статическая цена гривны к доллару
            this.changeToGrivna() // Вызываем метод (который мы прописали ниже), прямо в конструкторе, благодаря чему в this.price падает уже модифицированное значение

        }

        changeToGrivna() { // метод, для конвертации долларов в гривны
            this.price = this.price * this.staticPriceOfGrivna;
        }

        render() { // Вызовом метода render мы будем создавать html структуру который будет помещаться в определенный div
            const card = document.createElement('div'); /* Почему мы нашу всю верстку будем добавлять в отельный div, расскажут потом */
            card.innerHTML =
                `

               <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>

            `;
            this.parent.append(card); // Добавляем карточку в конец родителя
        }
    }


    /* Можно сделать так, создать переменную, в нее записать класс, с параметрами, затем на переменной вызвать метод render() */

    const dinamicCard = new MenuCard(
        `img/tabs/elite.jpg`,
        `dinamic`,
        `Меню "Динамическое"`,
        `Меню "Динамическое" -  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id, sunt ea obcaecati temporibus modi libero itaque vel, qui quidem repellendus quo? Nulla mollitia esse, ut dolor deleniti eligendi hic.`,
        4,
        `.menu .container`);

    dinamicCard.render();



    /* А можем напрямую вызвать метод render у класса menuCard если нам нужно использовать его "на месте", он используется и исчезнет и если нам не надо на него никаких ссылок в будущем, */

    new MenuCard(
        `img/tabs/elite.jpg`,
        `dinamic`,
        `Меню "Динамическое"`,
        `Меню "Динамическое" -  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id, sunt ea obcaecati temporibus modi libero itaque vel, qui quidem repellendus quo? Nulla mollitia esse, ut dolor deleniti eligendi hic.`,
        4,
        `.menu .container`).render();

})