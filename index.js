const back = document.querySelector('#back');
const next = document.querySelector('#next');
const img = document.querySelector('.slider-img');

let photos = [];

 let i = 0;
 /* Слайдер без таймера
 next.addEventListener('click', () => {
    i++;
    if (i > photos.length-1) {
        i = 0;
    }


    img.src= photos[i];
 });

 back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    img.src=photos[i];
 })

 let sliderInterval = setInterval(() => changeSlide(1), 3000); // Запуск авто-смены слайдов каждые 3 секунды

 function resetTimer() {
    clearInterval(sliderInterval); // Останавливаем предыдущий интервал
    sliderInterval = setInterval(() => changeSlide(1), 3000)
}

next.addEventListener('click', () => {
    changeSlide(1);
    resetTimer();
});

back.addEventListener('click', () => {
    changeSlide(-1);
    resetTimer();
});
 */

//API функция

async function loadPhotos() {
    try {
        for(let j = 0; j < 5; j++) {      //будет загружаться 5 фото
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            photos.push(data.message);
        }  
        img.src = photos[0];
    } catch (error) { 
      console.error("Error", error); 
    }
    

}

function changeSlide(direction) {
    i += direction;
    img.style.opacity = '0';

    if (i > photos.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = photos.length - 1;
    }


   setTimeout (() => {
     img.src = photos[i];
    img.style.opacity = '1';
   }, 300)
   
}

// Запуск авто-смены слайдов каждые 3 секунды
let sliderInterval = setInterval(() => changeSlide(1), 3000);

// Функция сброса таймера при клике
function resetTimer() {
    clearInterval(sliderInterval); // Останавливаем предыдущий интервал
    sliderInterval = setInterval(() => changeSlide(1), 3000); // Запускаем новый
}

// Обработчики событий для кнопок
next.addEventListener('click', () => {
    changeSlide(1);
    resetTimer();
});

back.addEventListener('click', () => {
    changeSlide(-1);
    resetTimer();
});

loadPhotos();
