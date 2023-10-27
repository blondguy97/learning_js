'use strict';


function sayName() {

    let x = this.age + 44;

    return console.log(x); 
}


let obj = {
    name: 'Yakov',
    age: 22
}



sayName.call(obj);

