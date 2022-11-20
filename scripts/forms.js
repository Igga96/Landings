////open/close forms/////////необходимо оптимизировать, и функцией сеттаймаут для вызова стейдж2 и закрытием через 3 секунды
const btnReview = document.querySelector('.review__button')
const btnSale = document.querySelector('.sale__button')
const saleForm = document.querySelector('.sale__form-hidden')
const reviewForm = document.querySelector('.reviews__form-hidden')
const overlay = document.querySelector('.overlay')
const btnsCard = document.querySelectorAll('.card__button')
const btnsFormClose = document.querySelectorAll('.form__close')


/*////////////////////////////////////////////////////////////////*
константа кнопки в форме -событе-
    func(){блокформы.style.display = 'none';
    блокновой формы.style.display = 'block'}
    setTimeout(func, 3000 )
}




*///////////////////
btnReview.addEventListener('click', () => {
    openReviewPopup()
})

for(const btnFormClose of btnsFormClose){
    btnFormClose.addEventListener('click', ()=>{
        closePopup()
    })
}



for(const btnCard of btnsCard){
    btnCard.addEventListener('click', function(){
openSalePopup()
    })

}


btnSale.addEventListener('click', () => {
    openSalePopup()
})

overlay.addEventListener('click', () => {
    closePopup()
})

function openReviewPopup() {
    myBody.classList.add('noscroll')
    overlay.style.display = 'block'
    reviewForm.style.display = 'block'
}

function openSalePopup() {
    myBody.classList.add('noscroll')
    overlay.style.display = 'block'
    saleForm.style.display = 'block'
}

function closePopup() {
    myBody.classList.remove('noscroll')
    overlay.style.display = 'none'
    saleForm.style.display = 'none'
    reviewForm.style.display = 'none'
}

///////////////////////////////////////// add count lamp in sale form//////////////////////////////////////////////
let counts = document.querySelectorAll('.sale__count-lamp');
counts.forEach(countFunc);

function countFunc(count) {
    let btnPlus = count.querySelector('.button__plus-count');
    let btnMinus = count.querySelector('.button__minus-count');
    let saleCount = count.querySelector('.sale__count');
    let saleValue = parseFloat(saleCount.value, 10);

    btnMinus.addEventListener('click', function () {
        if (saleValue > 1) {
            saleValue--;
            saleCount.value = saleValue;
        } else {
            return 1;
        }
    });
    btnPlus.addEventListener('click', function () {
        saleValue++;
        saleCount.value = saleValue;
    });
}