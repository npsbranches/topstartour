var headerMobileMenu = $('.header-right');
var headerBtnBars = $('.btn-bars');

headerBtnBars.click(function () {
    headerMobileMenu.toggleClass('active');
    $(this).toggleClass('active');
})

var header = $('.header');
var headerMenu = $('.header-menu')
var subMenu = $('.sub-menu');
var menuItemHasChildren = $('.menu-item-has-children');

$(window).scroll(function () {
    var windowTop = $(document).scrollTop();
    if (windowTop > 100) {
        header.addClass('sticky');
    } else {
        header.removeClass('sticky');
    }
});

menuItemHasChildren.click(function (e) {
    e.preventDefault();
    $(this).children(subMenu).toggleClass('toggle');
    $(this).find('a:first i').toggleClass('rotate');
})

$('.sub-menu a').click(function (e) {
    e.stopPropagation();
})

menuItemHasChildren.each(function () {
    $(this).find('a:first').append('<i class="fa fa-angle-down"></i>');
});

$(document).click(function (e) {
    if ($(e.target).closest(subMenu).length || $(e.target).closest('.header-menu ul li').length) return;
    subMenu.removeClass('toggle');
    $('.menu-item-has-children a:first i').removeClass('rotate');
    e.stopPropagation();
});



var toursMenuWrapper = $('.tours-menu');
var toursMenuHeader = $('.tours-menu-header');
var toursMenu = $('.tours-menu ul')

toursMenuHeader.click(function () {
    toursMenuWrapper.toggleClass('active');
    toursMenu.slideToggle();
})

$(document).click(function (e) {
    if ($(e.target).closest(toursMenuWrapper).length || $(e.target).closest(toursMenuHeader).length) return;
    toursMenuWrapper.removeClass('active');
    toursMenu.slideUp();
    e.stopPropagation();
});



// TABS
$(function () {
    $('#cities-tabs .tab-item').not(':first').hide();
    $('#cities-tabs .tabs-background').not(':first').hide();
    $('#cities-tabs .tab-link').click(function () {
        $('#cities-tabs .tab-link').removeClass('active').eq($(this).index()).addClass('active');
        $('#cities-tabs .tab-item').hide().eq($(this).index()).fadeIn();
        $('#cities-tabs .tabs-background').hide().eq($(this).index()).show();
    });
});

$(function () {
    $('#hotels-tabs .tab-item').not(':first').hide();
    $('#hotels-tabs .tabs-background').not(':first').hide();
    $('#hotels-tabs .tab-link').click(function () {
        $('#hotels-tabs .tab-link').removeClass('active').eq($(this).index()).addClass('active');
        $('#hotels-tabs .tab-item').hide().eq($(this).index()).fadeIn();
        $('#hotels-tabs .tabs-background').hide().eq($(this).index()).show();
    });
})

$(window).on('load', function () {

    $('.attractions').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

$('.attractions-view').magnificPopup();