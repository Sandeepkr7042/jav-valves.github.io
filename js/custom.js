// Fixed Header Start
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});
  
// Fixed Header End

// Sidebar Start
$('.navbar-toggler').click(function () {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-250px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});
// Sidebar End

// Navbar Button Style Start
$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        if($(this).hasClass('active'))
        {
            $(this).removeClass('active')
        }
        else{
            $(this).addClass('active')
        }
    });
});
// Navbar Button Style End

// Header Dropdown Start
// $(document).ready(function(){
//     $('.logoDropBox').click(function(){
//         $('.headLeft').toggleClass('active');
//     });
//     $(document).on("click", function (event) {
//         var $trigger = $(".headLeft");
//         if ($trigger !== event.target && !$trigger.has(event.target).length) {
//             $('.headLeft').removeClass('active');
//         }
//     });
// });

$(document).ready(function(){
    $('.mainMenu').on('click', function(){
        if($(this).parents('.menuItem').hasClass('activeMenu')){
            $(this).parents('.menuItem').removeClass('activeMenu');
            $(this).parents('.menuItem').find('.supMenu').slideUp();
        }
        else{
            $('.mainMenu').parents('.menuItem').removeClass('activeMenu');
            $('.mainMenu').parents('.menuItem').find('.supMenu').slideUp();
            $(this).parents('.menuItem').addClass('activeMenu');
            $(this).parents('.menuItem').find('.supMenu').slideDown();
        }
    });

    $(document).on("click", function (event) {
        var $trigger = $(".menuItem");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('.menuItem').removeClass('activeMenu');
            $('.menuItem').find('.supMenu').slideUp();
        }
    });
});

$(document).ready(function(){
    $('.subMenuLink').on('click', function(){
        if($(this).parents('.subMenuItem').hasClass('subMenuActive')){
            $(this).parents('.subMenuItem').removeClass('subMenuActive');
            $(this).parents('.subMenuItem').find('.subMenu').slideUp();
        }
        else{
            $('.subMenuLink').parents('.subMenuItem').removeClass('subMenuActive');
            $('.subMenuLink').parents('.subMenuItem').find('.subMenu').slideUp();
            $(this).parents('.subMenuItem').addClass('subMenuActive');
            $(this).parents('.subMenuItem').find('.subMenu').slideDown();
        }
    });
    $(document).on("click", function (event) {
        var $trigger = $(".subMenuItem");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $('.subMenuItem').removeClass('subMenuActive');
            $('.subMenuItem').find('.subMenu').slideUp();
        }
    });
})


// Header Dropdown End

// Banner Hide Show Class Toggle Start
$(document).ready(function(){
    $('.bannerCat').mouseenter( function(){
        if($(this).hasClass('javForgingTab')){
            $(this).parents('.mainBanner').find('.javValvesBoxs').removeClass('activeCategory');
            $(this).parents('.mainBanner').find('.javFlowBoxs').removeClass('activeCategory');
            $(this).parents('.mainBanner').find('.javForgingBoxs').addClass('activeCategory');
        }
        else if($(this).hasClass('javFlowTab')){
            $(this).parents('.mainBanner').find('.javForgingBoxs').removeClass('activeCategory');
            $(this).parents('.mainBanner').find('.javValvesBoxs').removeClass('activeCategory');
            $(this).parents('.mainBanner').find('.javFlowBoxs').addClass('activeCategory');
        }
        else if($(this).hasClass('javVavesTab')){
            $(this).parents('.mainBanner').find('.javForgingBoxs').removeClass('activeCategory');
            $(this).parents('.mainBanner').find('.javFlowBoxs').removeClass('activeCategory');
            $(this).parents('.mainBanner').find('.javValvesBoxs').addClass('activeCategory');
        }
    });
    $('.bannerCat').mouseleave(function(){
        $(this).parents('.mainBanner').find('.javForgingBoxs').removeClass('activeCategory');
        $(this).parents('.mainBanner').find('.javFlowBoxs').removeClass('activeCategory');
        $(this).parents('.mainBanner').find('.javValvesBoxs').removeClass('activeCategory');
    });
});
// Banner Hide Show Class Toggle End

// Testimonial Slider Start
$(document).ready(function(){
    $('.testimonialSlider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    slidesToShow: 2.1,
    infinite: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.3,
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1.2
            }
        }
    ]
    });
});
// Testimonial Slider End

$(document).ready(function(){
    $('.clientSliderMain').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        infinite: true,
        responsive: [
        {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            // {
            //     breakpoint: 415,
            //     settings: {
            //         slidesToShow: 1
            //     }
            // }
        ]
    });
});

// Industries Slider Start
$(document).ready(function(){
    $('.industrySlider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    slidesToShow: 2.5,
    infinite: true,
    responsive: [
        {
            breakpoint: 701,
            settings: {
                slidesToShow: 1.5
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1.2
            }
        }
    ]
    });
});
// Industries Slider End


// Contact Number With Flag and Country Code Start
var input = document.querySelector("#phone");
window.intlTelInput(input, {
    nationalMode: false,
});
$('#phone').click(function() {
    var elmcode = $(this).prev('.iti__flag-container').find('ul.iti__country-list').find('.iti__active').find(".iti__dial-code").text();
    $(this).val(elmcode + ' - ');
});
// Contact Number With Flag and Country Code End
