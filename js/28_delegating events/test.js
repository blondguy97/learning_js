
document.addEventListener('DOMContentLoaded', () => {

    const btns = document.querySelectorAll('button');


    const wrapperOfBtns = document.querySelector('.btn-block');


 
   

    wrapperOfBtns.addEventListener('mouseout', function (event) {
        console.log(event.type);
    })





    const btn = document.createElement('button');
    btn.classList.add('blue');
    wrapperOfBtns.prepend(btn);



    // wrapperOfBtns.addEventListener('click', function (event) {
    //     if (event.target.tagName == 'BUTTON') {
    //         console.log('ok');
    //     }
    // })
});