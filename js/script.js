$(window).scroll(function(){
    var windowTop = $(document).scrollTop();
    if (windowTop > 100) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});