'use strict';

document.addEventListener('DOMContentLoaded', function () {
    /* Rest оператор и параметры по умолчанию */


    const log = function (a, b, ...rest) {
        /* Мы не знаем точно в функции будет параметров, например параметр "a" это работа мужа, а параметр "b" это работа жены, а будут ли дальше какие то подработки или не будут, мы не знаем.
англ слово "rest"и переводится как остальные, оставшиеся.

rest оператор всегда пишется последним, сначала основные параметры.
Сам оператор rest мы можем назвать как угодно


*/
        console.log(a, b, rest);
    };

    log('Завод', 'Бухгалтерия', 'Уборка квартир', "Верстка сайтов");

    /* Завод Бухгалтерия [ 'Уборка квартир', 'Верстка сайтов' ]

    В консоль мы получаем что первые два слова у нас отображаются как обычно, а остальное вывелось в массив */

    /* напомним что spread оператор наоборот, массив может разложить на отдельные элементы, он имеет такой же синтаксис */
    
 




    function calcOrDouble(number, basis) {
        console.log(number * basis);
    }


    calcOrDouble(3, 5);
    /* Все верно, но что если забыть или по каким то другим причинам не передать второй аргумент? */



    function calcOrDouble_2(number, basis) {
        console.log(number * basis);
    }


    calcOrDouble_2(3);
    /* Будет "Not a Number"(NaN), то есть undefined будет складывается с числом */


    /* Раньше чтобы этого избежать делали так */


    function calcOrDouble_3(number, basis) {
        basis = basis || 5; // То есть прописывали условие где ИЛИ вернет первую правду, или в basis что то передали и вернется это самое переданное или если undefined,(которое всегда превращается  в false в логическом контексте), вернется второй число или что либо еще, в нашем случае это 5
        console.log(number * basis);
    }


    calcOrDouble_3(3);


    /* Но современный синтаксис такой */

    function calcOrDouble_4(number, basis = 5) { // Если в basis не передали аргумент, по умолчанию будет иметься ввиду то там 5
        console.log(number * basis);
    }


    calcOrDouble_4(3);



    /* Вернемся к нашему классу модальных окон чтобы на нем все продемонстрировать */




    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...otherClasses) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.otherClasses = otherClasses;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.staticPriceOfGrivna = 27;
            this.changeToGrivna()

        }

        changeToGrivna() {
            this.price = this.price * this.staticPriceOfGrivna;
        }

        render() {
            const card = document.createElement('div');

            if (this.otherClasses.length === 0) {
                card.classList.add('menu__item')
            } else {
                this.otherClasses.forEach(function (className) {
                    card.classList.add(className)
                })
            }

            card.innerHTML =
                `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(card);
        }
    }

    const dinamicCard = new MenuCard(
        `img/tabs/elite.jpg`,
        `dinamic`,
        `Меню "Динамическое"`,
        `Меню "Динамическое" -  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro id, sunt ea obcaecati temporibus modi libero itaque vel, qui quidem repellendus quo? Nulla mollitia esse, ut dolor deleniti eligendi hic.`,
        4,
        `.menu .container`,
        `menu__item`,
        `big`);



        

    dinamicCard.render();







});