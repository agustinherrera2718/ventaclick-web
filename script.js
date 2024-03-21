'use strict';

const addEventOnElements = function (elements, evenType, callback){
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(evenType, callback);
    }
}



/**NAVBAR TOGGLE FOR MOBILE */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelectorAll("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/**HEADER ACTIVE */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function (){
if (window.scrollY > 100){
    header.classList.add("active");}
    else{
        header.classList.remove("active");
        
    }


})