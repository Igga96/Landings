//product section
const btnsDark = document.querySelectorAll('.button__dark-desk');
const textOn = document.querySelector('.text__on');
const textOff = document.querySelector('.text__off');
const textOnHidden = document.querySelector('.text__on-hidden');
const textOffHidden = document.querySelector('.text__off-hidden');
const imgHidden = document.querySelector('.hidden__img-active');
const bg1 = document.querySelector('.container__bg1');



const myBody = document.body

//add class 'dark' to body

for (const btnDark of btnsDark) {
    btnDark.addEventListener('click', () => {
        darkBg()
    })
}

function darkBg() {
    myBody.classList.toggle('dark')
    textOff.classList.toggle('text__button-active')
    textOn.classList.toggle('text__button-active')
    textOffHidden.classList.toggle('text__button-active')
    textOnHidden.classList.toggle('text__button-active')
    bg1.classList.toggle('bg__active')
imgHidden.style.display = 'block'

}



