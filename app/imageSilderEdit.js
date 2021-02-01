const slides = document.querySelectorAll('.slide');
const leftBtns = document.querySelectorAll('.left-btn');
const rightBtns = document.querySelectorAll('.right-btn');
const infomations = document.querySelectorAll('.position .description');


let activeSlide = 0;

leftBtns.forEach(function (leftBtn) {
    leftBtn.addEventListener('click', function () {
        activeSlide--
    
        if (activeSlide < 0 ) {
            activeSlide = slides.length - 1;
            
        }
        setActiveSlide();
        infoslide();
    })
})

rightBtns.forEach(function (rightBtn) {
    rightBtn.addEventListener('click', function () {
        activeSlide++
    
        if (activeSlide > slides.length - 1) {
            activeSlide = 0;
            
        }
        setActiveSlide();
        infoslide();
    })
    
})


function setActiveSlide() {
    slides.forEach(function (slide) {
        slide.classList.remove('active')        
    })

    slides[activeSlide].classList.add('active')    
}

function infoslide() {
    infomations.forEach(function (info) {
        info.classList.remove('active')
        
    })

    infomations[activeSlide].classList.add('active')
    
}


// const mediaQuery = window.matchMedia('(min-width: 700px)');

// function tableScreen(e) {

//     if (e.matches) {
//         slides.forEach(function (slide) {
//             slide.style.backgroundImage = "url('img/desktop-image-hero-1.jpg')"
            
//         })
        
//     } else {
//         slides.forEach(function (slide) {
//             slide.style.backgroundImage = "url('img/mobile-image-hero-1.jpg')"
            
//         })
        
//     }
    
// }

// mediaQuery.addListener(tableScreen);

// tableScreen(mediaQuery)


