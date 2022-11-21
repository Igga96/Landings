//info__section - slider
const btnLeft = document.querySelector('.button__info-left'); //
const btnRight = document.querySelector('.button__info-right');
const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__image');
const scroll = document.querySelector('.info__slider-scroll');//input range

let scrollMax = scroll.max
let scrollMin = scroll.min
let scrollValue = scroll.value;
let count = scroll.value;
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
    count++
    if (count >= images.length) {
        count = 0;
    }
    scrollValue++
    if (scrollValue >= (scrollMax)) {
        scrollValue = scrollMin
    }
    rollSlider();
});

btnLeft.addEventListener('click', function () {

    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    scrollValue--
    if (scrollValue < scrollMin) {
        scrollValue = scrollMax
    }
    rollSlider();
});

function rollSlider() {
    scroll.value = count
    scroll.style.transition = '1000ms ease-in transform'
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    sliderLine.style.transition = '800ms ease transform';

}

//slider scroll
scroll.addEventListener("input", () => {
    let scrollValue = scroll.value
    sliderLine.style.transition = '800ms ease transform';
    sliderLine.style.transform = `translateX(${-scrollValue * (width)}px)`;
});
