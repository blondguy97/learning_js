'use strict';

document.addEventListener('DOMContentLoaded', function () {
    /* Рассмотрим интересную возможность MutationObserver и еще пару моментов 

    Обычно мы следили за событиями которые происходят на элементах, но бывает нужно следить за самими
    изменениями которые происходят в элементах, то есть если что то происходит с элементом
    то только тогда мы выполняем какое то действие, для этого нам нужен объект MutationObserver
    если что то в нем меняется, тогда мы будем воспроизвоидить какое то действие

    Изменения могут быть вызваны скриптами, внутри элементов могут быть вызваны другие элементы или изменены, появляется или удаляется текст, приходят данные от сервера
    
    */

    const box = document.querySelector('.box');

    let observer = new MutationObserver(function(MutationRecords) {
        console.log(MutationRecords);
    });

    observer.observe(box, {
        childList: true
    })


});