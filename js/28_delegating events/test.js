

const btns = document.querySelectorAll('button');




btns.forEach(function (item, index, arr) {
if (window.getComputedStyle(item).height === '40px') {
    item.style.height = 90 + 'px'   


}   



  
})
