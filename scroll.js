const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let counter = 0;

function slideToNext() {
  counter++;
  if (counter > 3) {
    counter = 0;
  }
  sliderContainer.style.transform = `translateX(-${counter * 100}%)`;
}

function slideToPrev() {
  counter--;
  if (counter < 0) {
    counter = 3;
  }
  sliderContainer.style.transform = `translateX(-${counter * 100}%)`;
}

prevBtn.addEventListener('click', slideToPrev);
nextBtn.addEventListener('click', slideToNext);

setInterval(slideToNext, 10000);

