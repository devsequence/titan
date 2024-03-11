$(".btn-primary, .btn-secondary").each((function (e) {
    const t = $(this);
    t.on("mousemove", (function (e) {
        const t = e.pageX - $(this).offset().left - 30, o = e.pageY - $(this).offset().top - 30;
        $(".circle").css({left: t, top: o})
    })), t.on("mouseenter", (function (e) {
        t.find(".circle")
            .addClass("active")
    })), t.on("mouseleave", (function (e) {
        t.find(".circle")
            .removeClass("active")
    }))
}));
for(var i=10; i<100; i++){
    var htmlInner = '<span>'+i+'</span>';
    $('.preload-list li').append(htmlInner);

}
function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});


$('.showHide').on('click', function (e) {

    var x = $(".input-password");
    if (x.attr('type') === "password") {
        x.attr("type", "text")
    } else {
        x.attr("type", "password")
    }
    console.log(x.attr('type'));
});

// if ($('.hero-wrapper').length > 0) {
//     $('.header').addClass('header-main');
//     $('.hero-slider').slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear',
//         prevArrow: $('.nav-hero__slider .prev-slide'),
//         nextArrow: $('.nav-hero__slider .next-slide'),
//     });
// } else {
//     $(window).on('scroll', function() {
//         var $this = $(this),
//             $headerH = $('.header').height();
//         if ($this.scrollTop() > 100) {
//             $('.header').css('top','-150px');
//         }else{
//             $('.header').css('top','0');
//         }
//         if ($this.scrollTop() > ($headerH + 250)) {
//             $('.header').addClass('scroll-nav').css('top','0');
//         }
//         else{
//             $('.header').removeClass('scroll-nav');
//         }
//     });
// }
// $('.header-btn').on('click', function (e) {
//     e.preventDefault();
//    const $ths = $(this);
//     $ths.toggleClass('active');
//     $('.header').toggleClass('is-open');
//     $('body').toggleClass('is-scroll');
// });
// $('.room-text-gallery li').on('click', function (e) {
//     e.preventDefault();
//     $('.gallery-popup').addClass('active');
//     $('body').addClass('is-scroll');
//     $("html, body").animate({ scrollTop: 0 });
// });
// $('.room-text-info .btn-primary').on('click', function (e) {
//     e.preventDefault();
//     $('.room-text-popup').addClass('active');
//     $('body').addClass('is-scroll');
// });
// $('.room-text-popup  .popup-close, .room-text-popup  .popup-overlay').on('click', function (e) {
//     e.preventDefault();
//     $('.room-text-popup').removeClass('active');
//     $('body').removeClass('is-scroll');
// });
// $('.gallery-popup__top a').on('click', function (e) {
//     const $thsHref = $(this).attr('href');
//     $('.gallery-popup-wrap').animate({
//         scrollTop: $($thsHref).offset().top - 20
//     }, 2000);
// });
// $('.gallery-popup-close').on('click', function (e) {
//     e.preventDefault();
//     const $ths = $(this);
//     $('.gallery-popup').removeClass('active');
//     $('body').removeClass('is-scroll');
// });
// //
// // $(document).mouseup( function(e){ // событие клика по веб-документу
// //     var div = $( ".gallery-popup-wrap .container" ); // тут указываем ID элемента
// //     if ( !div.is(e.target) // если клик был не по нашему блоку
// //         && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
// //         $('.gallery-popup').removeClass('active');
// //         $('body').removeClass('is-scroll');
// //     }
// // });
// Fancybox.bind("[data-fancybox]", {
//     // Your custom options
//     Thumbs: {
//         showOnStart: false,
//     },
// });