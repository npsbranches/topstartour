var headerMobileMenu = $('.header-right');
var headerBtnBars = $('.btn-bars');

headerBtnBars.click(function() {
    headerMobileMenu.toggleClass('active');
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

toursMenuHeader.click( function() {
    toursMenuWrapper.toggleClass('active');
    toursMenu.slideToggle();
})

$(document).click(function (e) {
    if ($(e.target).closest(toursMenuWrapper).length || $(e.target).closest(toursMenuHeader).length) return;
    toursMenuWrapper.removeClass('active');
    toursMenu.slideUp();
    e.stopPropagation();
});

