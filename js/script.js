let burger = document.body.querySelector('.header__burger');


burger.addEventListener('click', function () {
    document.body.querySelector('.header__burger').classList.toggle("active");
    document.body.querySelector('.header__menu').classList.toggle("active");
    document.body.querySelector('.header__list').classList.toggle("active");
    document.body.classList.toggle("lock");
    
})