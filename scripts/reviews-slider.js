
//reviews__section - slider
const reviewsBtnLeft = document.querySelector('.button__reviews-left'); //
const reviewsBtnRight = document.querySelector('.button__reviews-right');
const reviewsSlider = document.querySelector('.reviews__slider');
const reviewsSliderLine = document.querySelector('.reviews__slider-line');
const reviewsItems = document.querySelectorAll('.review__card');
const reviewsScroll = document.querySelector('.reviews__slider-scroll');//input range

let reviewsCount = reviewsScroll.value;
let reviewsCountMax = reviewsScroll.max
function reviewsInit() {
    widthR = reviewsSlider.offsetWidth;
    reviewsSliderLine.style.width = widthR - reviewsItems.length + 'px';
    reviewsItems.forEach(item => {
        item.style.width = widthR / 2 + 'px';
        if (window.matchMedia("(max-width: 999px)").matches) {
            item.style.width = widthR + 'px';
        };

    });
    reviewsRollSlider();
}

reviewsInit();
window.addEventListener('resize', reviewsInit);



reviewsBtnRight.addEventListener('click', function () {
    reviewsCount++
    if (reviewsCount >= reviewsItems.length / 2) {
        reviewsCount = 0;
    }
    reviewsRollSlider();
});
reviewsBtnLeft.addEventListener('click', function () {
    reviewsCount--;
    if (reviewsCount < 0) {
        reviewsCount = reviewsItems.length - 1;
    }
    reviewsRollSlider();
});

function reviewsRollSlider() {
    reviewsScroll.value = reviewsCount
    reviewsScroll.style.transition = '1000ms ease-in transform'
    reviewsSliderLine.style.transform = 'translate(-' + reviewsCount * widthR / (reviewsCountMax) + 'px)';
    if (window.matchMedia("(max-width: 999px)").matches) {
        reviewsSliderLine.style.transform = 'translate(-' + reviewsCount * widthR / (reviewsCountMax) + 'px)';
    }
    reviewsSliderLine.style.transition = '800ms ease transform';

}

//slider scroll
reviewsScroll.addEventListener("input", () => {
    let reviewsScrollValue = reviewsScroll.value
    reviewsSliderLine.style.transition = '800ms ease transform';
    reviewsSliderLine.style.transform = `translateX(${-reviewsScrollValue * (widthR)}px)`;
});
