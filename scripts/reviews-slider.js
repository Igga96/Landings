
//reviews__section - slider
const btnLeftR = document.querySelector('.button__reviews-left'); //
const btnRightR = document.querySelector('.button__reviews-right');
const sliderR = document.querySelector('.reviews__slider');
const sliderLineR = document.querySelector('.reviews__slider-line');
const imagesR = document.querySelectorAll('.review__card');
const scrollR = document.querySelector('.reviews__slider-scroll');//input range

let scrollMaxR = scroll.max
let scrollMinR = scroll.min
let scrollValueR = scrollR.value;
let countR = scroll.value;
let widthR;


function inits() {
    widthR = sliderR.offsetWidth;
    sliderLineR.style.width = widthR - imagesR.length + 'px';
    imagesR.forEach(item => {
        item.style.width = widthR/2 + 'px';
        if (window.matchMedia("(max-width: 999px)").matches) {
            item.style.width = widthR +'px';
        };
    });
    rollSliders();
}
inits();
window.addEventListener('resize', inits);

btnRightR.addEventListener('click', function () {
    countR++
    if (countR >= imagesR.length/2) {
        countR = 0;
    }
    scrollValueR++
    if (scrollValueR >= scrollMaxR) {
        scrollValueR = scrollMinR
    }
    rollSliders();
});

btnLeftR.addEventListener('click', function () {
    countR--;
    if (countR < 0) {
        countR = imagesR.length/3;
    }
    scrollValueR--
    if (scrollValueR < scrollMinR) {
        scrollValueR = scrollMaxR
    }
    rollSliders();
});

function rollSliders() {
    scroll.value = countR
    scroll.style.transition = '1000ms ease-in transform'
    sliderLineR.style.transform = 'translate(-' + countR * widthR/3 + 'px)';
    sliderLineR.style.transition = '800ms ease transform';

}

//slider scroll
scrollR.addEventListener("input", () => {
    let scrollValueR = scroll.value
   let wdthRv = imagesR.clientWidth;
    sliderLineR.style.transition = '800ms ease transform';
    sliderLineR.style.transform = `translateX(${-scrollValueR * (wdthRv)}px)`;
});
