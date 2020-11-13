$(document).ready(function () {
    // swiper slider
    var swiper = new Swiper(".swiper-slider", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: true,
        autoplaySpeed: 1000,
    });


    // back to top
    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        return false;
    })


    // back to top khi cuộn chuột mới hiện lên
    $(window).on('scroll load', function () {
        const body = $('html, body').scrollTop();
        if (body >= 100) {
            // $('.header__top').addClass('header__top-sticky');
            $('.back-to-top').fadeIn(300);
        } else {
            // $('.header__top').removeClass('header__top-sticky');
            $('.back-to-top').fadeOut(300);
        }

    })


    // menu open
    $(".menu-icon").on("click", function () {
        $(".section__menu").addClass("active");
    });

    // menu close
    $(".section__menu-header-times, .overplay").on("click", function () {
        $(".section__menu").removeClass("active");
    });
});