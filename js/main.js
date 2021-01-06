$(function () {
       $('.header__menu__list__item__link').mouseover(function () {
              $(this).parent().addClass('hover');
       });
       $('.header__menu__list__item__link').mouseout(function () {
              $(this).parent().removeClass('hover');
       });
});
$(function () {
       $('.cuba-photo__slider__items').slick({
              prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/arrowPrev.png"></button>',
              nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/arrowNext.png"></button>',
              autoplay: 3000,
              
       });
});
$(function () {
       $('.menu__btn').on('click', function(){
              $('.header__menu__list').slideToggle();

       });

});

// $('.header__menu__list__item__link').hover(function(e) {
//        e.preventDefault();
//        $(".header__menu__list__item").removeClass('active');
//        $(this).parent().addClass('active');
//      })