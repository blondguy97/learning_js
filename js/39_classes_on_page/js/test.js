
class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {

        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.transfer = 27;
        this.changeToGrivna();
    }

    changeToGrivna() {
        this.price = this.price * this.transfer;
    }


    render() {
        const element = document.createElement('div');

        element.innerHTML = `
        
            <div class="menu__item">
                    <img src="img/tabs/post.jpg" alt="post">
                    <h3 class="menu__item-subtitle">Меню "Постное"</h3>
                    <div class="menu__item-descr">Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
                        продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
                        количество белков за счет тофу и импортных вегетарианских стейков. </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>430</span> грн/день</div>
                    </div>
                </div>
        `
    }
}



