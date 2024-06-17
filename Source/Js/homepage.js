$(document).ready(function () {
    $('.sildenews').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
    });

    $('.sgslide').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});