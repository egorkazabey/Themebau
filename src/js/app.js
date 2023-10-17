import * as flsFunction from './modules/function.js';

flsFunction.isWebp();

//BURGER

const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

if (headerBurger) {
  headerBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    headerBurger.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
  });
}

const swiper = new Swiper('.swiper', {

  //! Основные настройки 
  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  speed: 500, // скорость переключения слайдов
  effect: 'flip', // cards, coverflow, flip, fade, cube
  // initialSlide: 2, // Начинаем со 2 слайдера
  // freeMode: true, // можно перетаскивать как ленту
  slidesPerView: 1, // кол-во активных слайдов
  // centeredSlides: true, // центрирование слайдов
  
  //! Пагинация (точки)
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // true - Пагинация становится кликабельной
  },

  //! Кнопки вперед и назад 
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // ! Автоматическое перелистывание
  autoplay: {
      delay: 3000, //Задержка перед перелистыванием 1с = 1000мл/с
  },
});
