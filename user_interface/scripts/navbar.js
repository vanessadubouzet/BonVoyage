'use strict';

// ELEMENTS
const btnHamburger = document.getElementById('btn-hamburger');
const sidebar = document.querySelector('.sidebar');

btnHamburger.addEventListener('click', function(e){
    sidebar.classList.toggle('active');
});