'use strict';


const restorantData = {
    menu: [{
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [{
        name: 'Alice',
        age: 22
    }, {
        name: 'John',
        age: 24
    }],
    averageLunchPrice: '20$',
    openNow: false
};


function transferWaitors(data) {
    let copy = Object.assign({}, data);

    copy.waitors = [{
        name: 'Mike',
        age: 23
    }, {
        name: 'John',
        age: 24
    }];
    return copy;
}

console.log(transferWaitors(restorantData));

console.log(restorantData);


