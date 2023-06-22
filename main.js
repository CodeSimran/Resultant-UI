function menuscroll() {
    var $navmenu = $('.menu-top');
    if ($(window).scrollTop() > 50) {
        $navmenu.addClass('sticky-header');
    } else {
        $navmenu.removeClass('sticky-header');
    }
}

$(window).on('scroll', function () {
    menuscroll();
});
// $( document ).ready() block.
$(document).ready(function () {
    setTimeout(function(){
        $('.loader_bg').hide();
    }, 1500);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    typingText();
    // requestAnimationFrame(update);
});
//Initialization of typescript
function typingText() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
    });
}

