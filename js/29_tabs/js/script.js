'use strict'

document.addEventListener('DOMContentLoaded', function () {


    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabcontainer');



    // Функция по скрытию табов

    function hideTabContent() {
        tabsContent.forEach(function (item) {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(function (tab) {
            tab.classList.remove('tabheader__item_active');
        })
    }


    // Функция по показу табов

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();


    /* Что за параметр (i = 0) у функции showTabContent??  
    Это фича стандарта ES6, то есть параметр по умолчанию. Дословно это значит что если функция вызовится без аргумента, автоматически подставится аргумент указанный нами, в нашему случае это 0, то есть первый таб на странице. Если же функция вызыватся с аргументом, то параметр по умолчанию игнорируется    */


    tabsParent.addEventListener('click', function (event) {
        const target = event.target;  /* Выносим event.target в отдельную переменную 
        чтобы 300 раз не писать одно и то же */

        if (target.classList.contains('tabheader__item')) {
            tabs.forEach(function (tab, numOfTab) {
                if (target === tab) {
                    hideTabContent();
                    showTabContent(numOfTab);
                }
            })
        }
    })




})