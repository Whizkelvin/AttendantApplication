let hamburger_Menu = document.getElementById('hm_menu')
let navLinks = document.getElementById('nav-links')
let closeBtn =  document.getElementById('close-btn')


hamburger_Menu.addEventListener('click', displayMenu)
function displayMenu (){
    navLinks.style.display = 'block'
}

closeBtn.addEventListener('click', closeMenu)
function closeMenu (){
    navLinks.style.display = 'none'
}