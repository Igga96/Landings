//slider
const btnLeft = document.querySelector('.button__circle-left')
const btnRight = document.querySelector('.button__circle-right')
const slider = document.querySelector('.slider')
const sliderLine = document.querySelector('.slider__line')
const images = document.querySelectorAll('.slider__image');


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
    if (count >= images.length) {
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

}




