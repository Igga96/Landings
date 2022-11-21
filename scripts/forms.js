////open/close forms/////////необходимо оптимизировать, и функцией сеттаймаут для вызова стейдж2 и закрытием через 3 секунды
const btnReview = document.querySelector('.review__button')
const btnSale = document.querySelector('.sale__button')
const saleForm = document.querySelector('.sale__form-hidden')
const reviewForm = document.querySelector('.reviews__form-hidden')
const overlay = document.querySelector('.overlay')
const btnsCard = document.querySelectorAll('.card__button')
const btnsFormClose = document.querySelectorAll('.form__close')
const thankSaleForm = document.querySelector('.form__sale-stage2')
const thankReviewForm = document.querySelector('.form__reviews-stage2')

for (const btnCard of btnsCard) {
    btnCard.addEventListener('click', function () {
        openSalePopup()
    })

}

btnSale.addEventListener('click', () => {
    openSalePopup()
})
///////////////////reviews
btnReview.addEventListener('click', () => {
    openReviewPopup()
})


/*closePopup*/
for (const btnFormClose of btnsFormClose) {
    btnFormClose.addEventListener('click', () => {
        closePopup()
    })
}

overlay.addEventListener('click', () => {
    closePopup()
})


//function say thank you///функции для всплывающего окошка благодароности 1 - после заказа, 2 - после отзыва

/*Далее в настройках формы переходим в "Свойства" -> "PHP скрипты" и в поле $thankYouMessage вставляем:
$thankYouMessage = ''.$thankYouMessage.'<script type="text/javascript">window.onload = 
function(){document.getElementById(\'popup_click\').style.display=\'block\';}</script>';

После этого сохраняем всё.

В итоге получаем отправку формы через модуль из всплывающего окна и после отправки 
всплывает окно благодарности, которое автоматически зарывается через 3000ms .
Без этого всплывающее окно закрывается после отправки формы.*/


function openSalePopupStage2() {
    myBody.classList.add('noscroll')
    overlay.style.display = 'block'
    thankSaleForm.style.display = 'block'
    setTimeout(() => {
        closePopup()
    }, 3000);
}
function openReviewPopupStage2() {
    myBody.classList.add('noscroll')
    overlay.style.display = 'block'
    thankReviewForm.style.display = 'block'
    setTimeout(() => {
        closePopup()
    }, 3000);
}
/////////////////////////// functions open/close ///////////


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
    thankSaleForm.style.display = 'none'
    thankReviewForm.style.display = 'none'
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