//product section
const btnDark = document.querySelector('.product__button-desktop2');
const btnOn = document.querySelector('.button__on')
const btnOff = document.querySelector('.button__off')

const myBody = document.body
//add class 'dark' to body
btnDark.addEventListener('click', () => {
    myBody.classList.toggle('dark')
})



