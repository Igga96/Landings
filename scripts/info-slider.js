//info__section - slider
const infoBtnLeft = document.querySelector('.button__info-left'); //
const infoBtnRight = document.querySelector('.button__info-right');
const infoSlider = document.querySelector('.slider');
const infoSliderLine = document.querySelector('.slider__line');
const infoItems = document.querySelectorAll('.slider__image');
const infoScroll = document.querySelector('.info__slider-scroll');//input range

let infoCount = infoScroll.value; ////

function infoInit() {
    width = infoSlider.offsetWidth;
    infoSliderLine.style.width = width - infoItems.length + 'px';
    infoItems.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    infoRollSlider();
}

infoInit();
window.addEventListener('resize', infoInit);

infoBtnRight.addEventListener('click', function () {
    infoCount++
    if (infoCount >= infoItems.length) {
        infoCount = 0;
    }
    
         infoRollSlider();
});
infoBtnLeft.addEventListener('click', function () {

    infoCount--;
    if (infoCount < 0) {
        infoCount = infoItems.length - 1;
    }
        infoRollSlider();
});

function infoRollSlider() {
    infoScroll.value = infoCount
    infoScroll.style.transition = '1000ms ease-in transform'
    infoSliderLine.style.transform = 'translate(-' + infoCount * width + 'px)';
    infoSliderLine.style.transition = '800ms ease transform';

}

//slider scroll
infoScroll.addEventListener("input", () => {
    let infoScrollValue = infoScroll.value
    infoSliderLine.style.transition = '800ms ease transform';
    infoSliderLine.style.transform = `translateX(${-infoScrollValue * (width)}px)`;
});
