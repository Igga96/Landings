//buttons
const btnDark = document.querySelector('.product__button-desktop2');
const btnOn = document.querySelector('.button__on')
const btnOff = document.querySelector('.button__off')

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})




const btnSale = document.querySelector('.sale__button')
btnSale.addEventListener('click', () => {
    document.body.classList.add('noscroll')
})




const btnAddCount = document.querySelector('.button__minus-count')
const btnRemoveCount = document.querySelector('.button__minus-count')
const saleFormValue = document.querySelector('sale__count')

btnAddCount.addEventListener('click', function(){

})
