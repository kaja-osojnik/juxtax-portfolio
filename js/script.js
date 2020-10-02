jQuery(document).ready(function( $ ) {


    jQuery(window).scroll(function() {

        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom === 0) {
            $ ('.scroll-arrow').removeClass('down')
            $ ('.scroll-arrow').addClass('arrow-at-bottom')
        } else {
            $ ('.scroll-arrow').addClass('down')
            $ ('.scroll-arrow').removeClass('arrow-at-bottom')
        }

        if ( $ (window).width() >= 480) {

            if ( $ (window).scrollTop() >= 200) {
                $ ('.main-gif').addClass('absolute');


            } else {
                $ ('.main-gif').removeClass('absolute');
            }
        } else {
            if ( $ (window).scrollTop() >= 100) {
                $ ('.main-gif').addClass('absolute');


            } else {
                $ ('.main-gif').removeClass('absolute');
            }
        }
    });

});

// $(document).ready(function(){
// });

$(window).scroll(function() {
    var theta = $(window).scrollTop() / 600 % Math.PI;
    $('.rosemill-logo').css({ transform: 'rotate(' + theta + 'rad)' });
    });

setTimeout(function(){
    document.querySelector("div.loading").classList.add("hidden");
}, 3000)


setTimeout(function(){
    document.querySelectorAll('.pixelator').forEach(function(pixel) {
            const filename = pixel.dataset.original;
            const image = new Image()
            image.src = filename
            image.onload = function() { pixel.style.backgroundImage = `url(${filename})`;}
        }
    )

    document.querySelector('h1').classList.add('animated');
}, 3001)





