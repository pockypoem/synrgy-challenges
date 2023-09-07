"use strict";

// Element Toggle Function

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


// navbar variables
const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

    navElemArr[i].addEventListener("click", function() {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
        elemToggleFunc(document.body);
    })

}


// Carousel
// Inisialisasi Carousel
// const recipeCarousel = document.getElementById('recipeCarousel');
// const carousel = new bootstrap.Carousel(recipeCarousel, {
//     interval: 10000
// });

// // Iterasi setiap carousel item
// const carouselItems = document.querySelectorAll('.carousel .carousel-item');
// const minPerSlide = 3;

// carouselItems.forEach(function (carouselItem) {
//     let next = carouselItem.nextElementSibling || carouselItem.parentElement.firstElementChild;

//     for (let i = 0; i < minPerSlide; i++) {
//         carouselItem.appendChild(next.firstElementChild.cloneNode(true));
//         next = next.nextElementSibling || carouselItem.parentElement.firstElementChild;
//     }
// });