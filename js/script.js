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



//venera animation

// let x = 0;
// const el = document.querySelector(".venera");
//
// function step(){
//   x+= .1;
// //  el.style.transform = "translateX("+x+"%)";
//    el.style.left = x+"%";
//   if(x<90){
//     window.requestAnimationFrame(step);
//   }
// }
//
// window.requestAnimationFrame(step);
//
//
// let num = 200;
//
// const interval = window.setInterval(countDown, 7000);
//
// function countDown(){
//   num --;
//   if (num < 0){
//     clearInterval(interval);
//   }
// }

// pixelated

// const pixelator = document.querySelector('.pixelator');
// const filename = pixelator.dataset.original;
//
// const image = new Image();
// image.src = filename;
//
// image.onload = () => {
//     pixelator.style.backgroundImage = `url(${filename})`;
// }

setTimeout(function(){
    document.querySelector("div.loading").classList.add("hidden");
}, 4000)




