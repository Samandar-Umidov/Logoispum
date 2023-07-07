var menuButton = document.querySelector('.menu-btn')
var mobileNav = document.querySelector('.mobile-nav')
var modeBtn = document.querySelector('.mode-btn')


menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open')
    mobileNav.classList.toggle('open')
})

modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})