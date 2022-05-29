// v01
// var questionsItems = document.querySelectorAll('.questions__list .questions__item');

// for(let i = 0; i < questionsItems.length; i++) {
//     questionsItems[i].addEventListener('click', function () {
//         var question = questionsItems[i].classList.contains('questions__item_active');
//         if (question>0) {
//             console.log(question);
//             questionsItems[i].classList.remove('questions__item_active');
//         } else {
//             questionsItems[i].classList.add('questions__item_active');
//         }
//     })
// }



// v02
let questionsList = document.querySelector('.questions__list');
let questionsItems = document.querySelectorAll('.questions__list .questions__item');

questionsList.addEventListener('click', function (event) {
  let target = event.target;

  if (target.classList.contains('questions__item')) {
    for(let i = 0; i < questionsItems.length; i++) {
      questionsItems[i].classList.remove('questions__item_active');

    }
    target.classList.add('questions__item_active');
  } 
    
})



let hiddenMenu = document.querySelector('#hidden-menu');

window.addEventListener("scroll", function() {
    const element = document.querySelector('#intro');
    const height = element.offsetHeight; // высота блока
    const position = window.pageYOffset; // позиция по Y

    //console.log(height);
    //console.log(position);

    if (position > height) {
      hiddenMenu.classList.add('menu-active');
    } else {
      hiddenMenu.classList.remove('menu-active');
    }

})



const anchors = document.querySelectorAll('.main-menu .link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const scrollTarget = anchor.getAttribute('href').substring(1);
    
    console.log(scrollTarget);

    console.log(document.getElementById(scrollTarget));

    document.getElementById(scrollTarget).scrollIntoView({
      behavior: 'smooth'
    })

  })
}


var buttonBurger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobileMenuWrap');
var body = document.querySelector('body');

buttonBurger.addEventListener('click', function () {
       mobileMenu.classList.add('open');
       body.style.overflow = 'hidden';
})

var mobile = document.querySelector('.mobileMenu');
var mobileMenuItemLink = document.querySelector('.mobileMenuItemLink');

mobileMenu.addEventListener( 'click', (e) => {
    const click = e.composedPath().includes(mobile);
    if ( !click || mobileMenuItemLink ) {
        mobileMenu.classList.remove('open');
        body.style.overflow = 'initial';
    }
})
