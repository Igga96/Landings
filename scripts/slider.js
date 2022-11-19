//info__section - slider
const scroll = document.querySelector('.info__slider-scroll');//input range
const btnLeft = document.querySelector('.button__info-left'); //
const btnRight = document.querySelector('.button__info-right');
const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__image');

let scrollValue = scroll.value;
let count = 0;
let width;


function init() {
    width = slider.offsetWidth;
    sliderLine.style.width = width - images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

btnRight.addEventListener('click', function () {
    count++;
    if (count >= images.length ) {
        count = 0;
    }
    rollSlider();
});

btnLeft.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {

    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    sliderLine.style.transition = '800ms ease transform';

}

//slider scroll
scroll.addEventListener("input", () => {
    let scrollValue = scroll.value
    sliderLine.style.transition = '800ms ease transform';
    sliderLine.style.transform = `translateX(${-scrollValue * (width)}px)`;
});


//reviews section


const scrollReviews = document.querySelector('.reviews__slider-scroll');
const reviewSliderLine = document.querySelector('.reviews__slider-line');
const card = document.querySelector('.review__card');
const cardWidth = card.clientWidth;

scrollReviews.addEventListener("input", () => {
    let scrollValue = scrollReviews.value

    if (window.matchMedia("(max-width: 1599px)").matches) {
        scrollReviews.max = 4;
    };

    reviewSliderLine.style.transition = '800ms ease transform';
    reviewSliderLine.style.transform = `translateX(${-scrollValue * (cardWidth)}px)`;
});