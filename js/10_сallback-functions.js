'use strict';

function first () {
    // do something

    setTimeout(function() {
        console.log(1);
    }, 1000);
}

function second () {
    console.log(2);
}

first();
second();

// 2, и только потом 1. Если функции в коде идут одна за другой, это не значит что они выполняются в том же порядке, зависит от нагруженности функций или например установки таких пока нам неизвестных параметров как setTimeOut() Изучим позже.

/* Что такое callback-function? Это функция которая выполнится, когда другая функция завершит свое выполнение. 
Это делается таким образом, что в функцию передается в параметры другая функция, и уже в нужном месте в блоке кода выполняется. В общем как в примере ниже*/

function learnJS_1(lang, callback) {
    console.log(`i will learn ${lang}`);
    callback();
}

learnJS_1('javaScript', function() {
    console.log('I have passed this lesson');
});

/* i will learn javaScript
I have passed this lesson

Таким образом мы видим как функции в независимости от чего бы то ни было, выполняются по очереди друг за другом. Последовательно. А данном примере  в аргументах мы использовали анонимную функцию, то есть без имени. К ней мы больше обратиться не сможем. Но мы можем использовать и вполне осознанную функцию
*/


function learnJS_2(lang, callback) {
    console.log(`i will learn ${lang}`);
    callback();
}

function done () {
    console.log('I have passed this lesson');

}

learnJS_2('javaScript', done);

/* i will learn javaScript
I have passed this lesson

Все то же самое что и было. Только тут один момент, как передавать существующую функцию в аргументы, заметь что я ее не вызывал (не было круглых скобок), ведь она и так вызыфается внутри функции. То есть как бы сказали "выполни функцию done когда ты до нее доберешься в коде, плиз"

*/