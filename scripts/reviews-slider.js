
//reviews__section - slider
const btnLeftR = document.querySelector('.button__reviews-left'); //
const btnRightR = document.querySelector('.button__reviews-right');
const sliderR = document.querySelector('.reviews__slider');
const sliderLineR = document.querySelector('.reviews__slider-line');
const imagesR = document.querySelectorAll('.review__card');
const scrollR = document.querySelector('.reviews__slider-scroll');//input range

let scrollMaxR = scroll.max/2
let scrollMinR = scroll.min
let scrollValueR = scroll.value;
let countR = scroll.value;
let widthR;


function init() {
    widthR = sliderR.offsetWidth;
    sliderLineR.style.width = widthR - imagesR.length + 'px';
    imagesR.forEach(item => {
        item.style.width = widthR/2 + 'px';
        if (window.matchMedia("(max-width: 999px)").matches) {
            item.style.width = widthR +'px';
        };
    });
    rollSlider();
}
init();
window.addEventListener('resize', init);

btnRightR.addEventListener('click', function () {
    countR++
    if (countR >= imagesR.length/2) {
        countR = 0;
    }
    scrollValueR++
    if (scrollValueR >= (scrollMaxR)) {
        scrollValueR = scrollMinR
    }
    rollSlider();
});

btnLeftR.addEventListener('click', function () {
    countR--;
    if (countR < 0) {
        countR = imagesR.length/2 - 1;
    }
    scrollValueR--
    if (scrollValueR < scrollMinR) {
        scrollValueR = scrollMaxR
    }
    rollSlider();
});

function rollSlider() {
    scroll.value = countR
    scroll.style.transition = '1000ms ease-in transform'
    sliderLineR.style.transform = 'translate(-' + countR * widthR/2 + 'px)';
    sliderLineR.style.transition = '800ms ease transform';

}

//slider scroll
scroll.addEventListener("input", () => {
    let scrollValue = scroll.value
    sliderLineR.style.transition = '800ms ease transform';
    sliderLineR.style.transform = `translateX(${-scrollValue * (widthR)}px)`;
});
