// let now = new Date();
// console.log(now);


// let date = new Date(-72 * 3600 * 1000);
// console.log(date);


// let now = new Date('00:02:05 2024-01-30');
// console.log(now);


let users = [{
    name: 'Alex',
    birhday: new Date(2017, 4, 12)
},
{
    name: 'Ola',
    birhday: new Date(2011, 7, 11)

},
{
    name: 'Nava',
    birhday: new Date(1994, 12, 8)

}
]

let search = '2011.07.11';

let searchData = new Date(search)

console.log(searchData);

users = users.filter(function (user) {
    if (user.birhday.getFullYear() > 2000 ) {
        return true;
    }

})

console.log(users);