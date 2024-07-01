'use strict';

document.addEventListener('DOMContentLoaded', function () {
    /* Rest оператор и параметры по умолчанию */

    /*     Rest и Spread операторы можно сказать как брать, Spread это оператор разворота. Rest использует такой же синтаксис, но уже в других условиях.
    Spread оператор берет сущность и расладывает ее на отдельные элементы, то rest занимается обратным. Он отдельные элементы объединяет в один массив
     */




    const log = function (a, b, ...rest) { // ...rest говорит тут о том что тут могут быть бесконечное множество каких-либо аргументов

        console.log(a, b, rest);


        /* Мы не знаем точно в функции будет параметров, например параметр "a" это работа мужа, а параметр "b" это работа жены, а будут ли дальше какие то подработки или не будут, мы не знаем.
англ слово "rest" и переводится как остальные, оставшиеся.

rest оператор всегда пишется последним, сначала основные параметры.
Сам оператор rest мы можем назвать как угодно


*/
    };

    log('Завод', 'Бухгалтерия', 'Уборка квартир', "Верстка сайтов");

    /* Завод Бухгалтерия [ 'Уборка квартир', 'Верстка сайтов' ]

    В консоль мы получаем что первые два слова у нас отображаются как обычно, а остальное вывелось в массив */

    /* напомним что spread оператор наоборот, массив может разложить на отдельные элементы, он имеет такой же синтаксис */







    // ТЕПЕРЬ НЕМНОГО ПРО ОПЕРАТОР ПО УМОЛЧАНИЮ


    function calcOrDouble(number, basis) {
        console.log(number * basis);
    }


    calcOrDouble(3, 5);
    /* 15. Все верно, но что если забыть или по каким то другим причинам не передать второй аргумент? */



    function calcOrDouble_2(number, basis) {
        console.log(number * basis);
    }


    calcOrDouble_2(3);
    /* Будет "Not a Number" (NaN), то есть undefined будет складывается с числом */


    /* Раньше чтобы этого избежать делали так */


    function calcOrDouble_3(number, basis) {
        basis = basis || 5; // То есть прописывали условие где ИЛИ вернет первую правду, или в basis что то передали и вернется это самое переданное или если undefined,(которое всегда превращается   false в логическом контексте), вернется второй число или что либо еще, в нашем случае это 5
        console.log(number * basis);
    }


    calcOrDouble_3(3); // Работает. 15.


    /* Но современный синтаксис такой */

    function calcOrDouble_4(number, basis = 5) { // Если в basis не передали аргумент, по умолчанию будет иметься ввиду то там 5
        console.log(number * basis);
    }


    calcOrDouble_4(3); // Работает. 15.



    /* Вернемся к нашему классу модальных окон чтобы на нем все продемонстрировать */



    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...otherClasses) { // Добавляем rest оператор и называем его ...otherClasses. Вдруг при создании очередной карточки на странице нам понадобятся какие-либо модифицируешие на карточку классы? Например сделать ее поменьше, или в другом цвете
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector);
            this.price = price.toFixed(1);

            this.classes = otherClasses; // Не забываем что тут будет rest оператор, а это массив

            this.staticPriceOfRUB = 70;
            this.changeToRUB()

        }

        changeToRUB() {
            this.price = Number(this.price) * this.staticPriceOfRUB;
        }

        render() {

            const card = document.createElement('div');



            /* Прописываем условие при котором если пользователь забудет добавить классы нашим карточкам, и в массиве classes будет 0 элементов, то по умолчанию встанет класс .menu__item. Если же будет хоть один, выполнится другой блок кода и все классы которые будут в массиве запишутся в карточку */

            if (this.classes.length === 0) {
                card.classList.add('menu__item')
            } else {
                this.classes.forEach(function (className) {
                    card.classList.add(className);
                });
            }





            card.innerHTML =

                `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
            `;
            this.parent.append(card);
        }
    }



    new MenuCard(
        `img/tabs/elite.jpg`,
        `dinamic`,
        `Меню "Динамическое №1"`,
        `Меню "Динамическое №1" - Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id, sunt ea obcaecati temporibus modi libero itaque vel, qui quidem repellendus quo? Nulla mollitia esse, ut dolor deleniti eligendi hic.`,
        44,
        `.menu .container`,
        'menu__item').render();







    function setOptions(height, width, ...additional) {
        console.log(height, width, additional)
    }



    setOptions(400, 500, 'red', 'top');


});