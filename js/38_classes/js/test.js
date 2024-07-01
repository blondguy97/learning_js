
class Rectangle {
    constructor(height, width) {
        this.height = height; // C помощью this мы обращаемся к экземпляру новосозданного объекта
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

}




class ColoredRectangle extends Rectangle {
    /* extends означает что класс ColoredRectangle будет наследовать все свойства и методы от класса Rectangle */
    constructor (height, width, bgСolor) {
        super(height); // Этот метод вызывает свойства и методы родителя, в нашем случае это все перейдет от класса Rectangle.  super() должен всегда идти на первои месте в конструкторе
        this.bgСolor = bgСolor;
    }

    showColor() {
        console.log(`Цвет прямоугольника будет: ${this.bgСolor}`);
    }
}

let xxx = 'green'

const div = new ColoredRectangle(30, 20, xxx);

div.showColor();  

