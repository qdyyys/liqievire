"use strict"
let burgerButton = document.querySelector('.burger-ico')
let burgerMenu = document.querySelector('.burger-menu')
let closeBtn = document.querySelector('.close-btn')

burgerButton.addEventListener('click', function(){
    burgerMenu.classList.add('click-burger-menu')
})

closeBtn.addEventListener('click', function() {
    burgerMenu.classList.remove('click-burger-menu')
    burgerMenu.classList.add('rem-burger')
})