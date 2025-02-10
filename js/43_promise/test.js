
console.log('Запрос данных...');

setTimeout(function () {
    console.log('Подготовка данных...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(function () {
        product.status = 'order';
        console.log(product);
    }, 2000)
}, 2000) /* И количество callback функций может только разрастаться, что может привести к так называемому между программистами "callback hell", когда 15-20 функций следуют одна за одной. Чтобы не попадасть в тот хэлл, нам и понадобятся промисы */








console.log('Запрос данных...');


const req = new Promise(function (resolve, reject) { /* Записываем наш блок кода в новый промис который присваиваем переменной req. Здесь когда мы используем промисы resolve и reject обозначают функции которые мы в будущем можем сами передавать resolve означает что что-то выполнилось правильно, как мы ожидали, reject означает что наше обещание не выполнилось и что то пошло не так*/

    setTimeout(function () {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);

    }, 2000)

});



req.then(function (product) {

    const req_2 = new Promise(function (resolve, reject) {
        resolve(product);


    });

    req_2.then(function(data) {
        console.log(data);
    })

}); /* Этот код выполнится при вызове функции resolve, то есть если все будет хорошо в коде который сверху */

/* then это метод который выполняется на промисе в случае положительного исхода*/


