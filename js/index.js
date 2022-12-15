var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-links');
const panes = $$('.products');
const btn = $('#menu-btn');
const menu = $('.navbar');
const logo = $('.logo');

/*click to show hamburger menu*/
// btn.onclick = function(){ 
//   menu.classList.toggle('active-m');
// }
// document.onclick = function(e){
//   if(e.target.id !== 'menu' && e.target.id !== 'menu-btn') {
//     menu.classList.remove('active-m');
//   }
// }





/* Change tab function but apparently it doesn't work like my intention */

// tabs.forEach((tab, index) => {
//     const pane = panes[index]
//     tab.onclick = function(){
//         $('.tab-links.active').classList.remove('active')
//         $('.products.active-s').classList.remove('active-s')
//         this.classList.add('active')
//         pane.classList.add('active-s')
//     }
// })

/*the red line under tab section*/
const tabActive =$('.tab-links.active');
const line = $('.line');
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

// const contact = $$('.link')
// contact.forEach((l, index) => {
//     this.onclick = function(){
//         $('.link.active').classList.remove('active')
//         $('.link').classList.add('active')
//     } 
// })


