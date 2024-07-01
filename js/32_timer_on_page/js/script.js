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

	const deadLine = '2025-01-25'; /* Инициализируем дедлайн, допустим 25 декабря 2025 */

	function getTimeRemaining(endTime) { // Создаем функцию для определения разницы во временем между нашим текущим временем и дедлайном

		const ms = Date.parse(endTime) - Date.parse(new Date()); // Вычисляем разницу по времени между нашим дедлайном и нашим текущим временем в миллисекундах


		const days = Math.floor(ms / (1000 * 60 * 60 * 24)) /* C помощью этого выражения получаем сколько суток от нынешнего дня у нас осталось до дедлайна, также тут используем Math.floor, это округление до ближайшего целого  */

		const hours = Math.floor((ms / (1000 * 60 * 60)) % 24); /* C помощью этого выражения получаем сколько часов от нынешнего дня у нас осталось до дедлайна. Здесь в конце выражения ставим оператор остатка от деления %, то есть "хвостик" от кол-ва дней, например осталось 50 часов, применяем оператор остатка от деления, получается 48 часов, то есть 2ое суток, и оператор остатка возвращает 2 часа оставшиеся. Часы не должны быть больше чем 24 часа   */

		const minutes = Math.floor((ms / 1000 / 60) % 60); /* C помощью этого выражения получаем сколько минут от нынешнего дня у нас осталось до дедлайна. Здесь мы делим миллисекунды на секунды, а потом еще на минуты, а затем как и в предыдущем примере применяем оператор остатка от деления, и отбрасывая все лищнее оставляем ТОЛЬКО минуты. "Хвостик" не должен быть больше чем 60 минут  */
		const seconds = Math.floor((ms / 1000) % 60); /* C помощью этого выражения получаем сколько секунд от нынешнего дня у нас осталось до дедлайна. "Хвостик" не должен быть больше чем 60 секунд */

		return {
			'total': ms,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		} // Из функции getTimeRemaining возвращаем объект
	}



	function getZero(num) {
		if(num >= 0 && num < 10) {
			return '0' + num;
		}
		else {
			return num
		}
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

			days.innerHTML =  getZero(remainingTime.days), // Кол-во дней которое нам нужно отобразить на странице
				hours.innerHTML = getZero(remainingTime.hours), // Кол-во часов которое нам нужно отобразить на странице
				minutes.innerHTML = getZero(remainingTime.minutes), // Кол-во минут которое нам нужно отобразить на странице
				seconds.innerHTML = getZero(remainingTime.seconds); // Кол-во секунд которое нам нужно отобразить на странице


			if (remainingTime.total <= 0) {
				clearInterval(timeInterval);
				days.innerHTML = '<strong style="color: red;">0</strong>',
					hours.innerHTML = '<strong style="color: red;">0</strong>',
					minutes.innerHTML = '<strong style="color: red;">0</strong>',
					seconds.innerHTML = '<strong style="color: red;">0</strong>';
			} // Создаем условие при котором если время в таймере уже равно нулю или идет в отрицательную сторону, то таймер уже не обновляем, просто останавливаем, а также в переменные через innerHTML добавляем нули, и теперь таймер точно не пойдет в обратную сторону 



		}
	}

	setClock('.promotion__timer .timer', deadLine)







}); // Конец всего кода