
// "use strict"


// const swiper1 = document.querySelector('.swiper-video'),
// swiper2 = document.querySelector('.main-slader'),

//!СОЗДАЕМ КОНСТАТЫ В ОДНИ СПИСОК
const burger = document.querySelector('.burger'),
   close = document.querySelector('.menu__close'),
   menu = document.querySelector('.menu'),

   //для кнопки плей на видео playbuttonsFirst сами создали название.
   playButtonsFirst = document.querySelectorAll('.main-slider__play ');



//! НАСТРОЙКИ ПЕРВОГО СЛАЙЛЕРА
let swiper_2 = new Swiper('.main-slader', {

   centeredSlides: true,
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   effect: 'fade',


});

//! НАСТРОЙКИ ВТОРОГО СЛАЙДЕРА НАЗВАНИЕ swiper-video

let swiper = new Swiper('.swiper-video', {
   centeredSlides: true,
   //Делаем слайдер по центру
   loop: true,
   //Бесконечное свайп
   spaceBetween: 100,
   //отступы между слайдами
   slidesPerView: 'auto',

});




//ОТКРЫТИЕ БУРГЕРА!
burger.addEventListener('click', () => {
   menu.classList.add('menu--visible');

});

//ЗАКРЫТИЕ БУРГЕР МЕНЮ ЧЕРЕЗ КРЕСТИК
close.addEventListener('click', () => {
   menu.classList.remove('menu--visible');

});

//!АКТИВИРУЕМ ВИДЕО ПО НАЖАТИЮ НА ПЛЕЙ
playButtonsFirst.forEach((el) => {
   el.addEventListener('click', (e) => {
      let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
      video.play();
      e.currentTarget.style.display = 'none';
      setTimeout(() => {
         video.volume = 0.5;
      }, 1000);

   });
});



//!Управление слайдером main-swiper ПО ЕГО НАЗВАНИЮ swiper_2 (название сами придумали выше!)
swiper_2.on('transitionEnd', function () {

   //воспроизвести слайдер заново после переключение слайдера 
   let videos = document.querySelectorAll('.first__slider video');

   videos.forEach((el) => {
      el.pause();
      el.currentTime = 0;
   });

   //ВОЗВРАЩАЕТ КНОПКУ PLAY назад после переключения слайдера
   playButtonsFirst.forEach((el) => {
      el.style.display = 'block';
   });

});



