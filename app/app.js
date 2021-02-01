let mobileMenuIcon = document.querySelector('.mobile-menu');
let nav = document.querySelector('.nav-links');
let closeMenu = document.querySelector('.close-menu');
let overlay = document.querySelector('.overlay');


mobileMenuIcon.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMoblileMenu);

function openMobileMenu(){
    mobileMenuIcon.classList.add('rightspin');
    mobileMenuIcon.addEventListener('animationend', function () {
        nav.classList.add('open')
        overlay.classList.add('open')
        
    })
    
  
}

function closeMoblileMenu(){
    nav.classList.remove('open')
    mobileMenuIcon.classList.remove('rightspin');
    overlay.classList.remove('open')

}


