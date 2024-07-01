

let answer = prompt('какое слово выводим?')

let first = prompt('какое число возводим?')

let second = prompt('В какую степень?')


function pow(x, n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * x;
    }

    for (let i = 0; i < result; i++)
        document.body.innerHTML =
            document.body.innerHTML + `<h1>${answer}</h1> `;
}


pow(first, second);