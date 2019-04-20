$(window).scroll(function(){
    var windowTop = $(document).scrollTop();
    if (windowTop > 100) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

$('.menu-header ul li i').click(function() {
    $(this).toggleClass('rotate');
    $(this).siblings('.sub-menu').toggleClass('toggle');
    $(this).closest('li').toggleClass('background');
})