$(document).ready(function() {
    var navOpen = false;
    var addAnimation = false;
    var darkMode = "true";
    var scroll = $(window).scrollTop();
    $('.mobile-nav').removeClass('d-none');
    $('.mobile-nav').hide();
    $('.about-text').hide();

    $(window).on('scroll', function() {
        if(!navOpen) {
            if ($(this).scrollTop() >= 200) {
                if(addAnimation == false) {
                    $('#navbar').addClass('fixed-top-animation');
                }
                $('#navbar').removeClass('position-absolute');
                $('#navbar').addClass('fixed-top');
                if(darkMode === "true") {
                    $('#navbar').addClass('bg-dark-blur');
                } else {
                    $('#navbar').addClass('bg-light-blur');
                }
            } else if ($(this).scrollTop() == 0) {
                if(addAnimation == true) {
                    $('#navbar').addClass('fixed-top-animation');
                    addAnimation = false;
                }
                $('#navbar').addClass('position-absolute');
                $('#navbar').removeClass('fixed-top');
                $('#navbar').removeClass('bg-dark-blur');
                $('#navbar').removeClass('bg-light-blur');
                $('#navbar').removeClass('fixed-top-animation');
            }
        }
    });
    
   
    // Toggle open and close hidden nav on click
    $('#nav-toggle').click(function() {
        $('.mobile-nav').slideToggle();
    });
    
    // Toggle open and close hidden nav on click
    $('#about-add').click(function() {
        $('.about-text').slideToggle();
        var btn = $('#about-add').text();
        if(btn === '+ Read More') {
            $('#about-add').text('- Read More');
        } else if(btn === '- Read More') {
            $('#about-add').text('+ Read More');
        }
    });
    
    // toggle X
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
        if(navOpen == true) {
            // if(scroll < 200) {
            //     console.log('fixed...up');
            //     addAnimation = false;
            //     $('#navbar').addClass('position-absolute');
            //     $('#navbar').removeClass('fixed-top');
            //     $('#navbar').removeClass('fixed-top-animation');
            // }
            navOpen = false;
        } else {
            if(scroll < 200) {
                addAnimation = true;
                $('#navbar').removeClass('position-absolute');
                $('#navbar').addClass('fixed-top');
            }
            navOpen = true;
        }
    });

    // Toggle switch between light and dark mode
    document.getElementById ("toggle-link").addEventListener ("click", toggleDark, false);

    function toggleDark() {
        var element = document.getElementsByTagName("html")[0];

        if(darkMode === "true") {
            $('p').addClass('for-L-p');
            $('.heading p').addClass('for-L-hp');
            element.removeAttribute("dark");
            darkMode = "false";
            $('#navbar').removeClass('bg-dark-blur');
            $('#navbar').addClass('bg-light-blur');
            $('.mobile-nav').removeClass('bg-dark-blur');
            $('.mobile-nav').addClass('bg-light-blur');
        } else if(darkMode === "false" || darkMode === null) {
            element.setAttribute("dark", "true");
            darkMode = "true";
            $('#navbar').removeClass('bg-light-blur');
            $('#navbar').addClass('bg-dark-blur');
            $('.mobile-nav').removeClass('bg-light-blur');
            $('.mobile-nav').addClass('bg-dark-blur');
        }
    }

    $('.brand-carousel').owlCarousel({
        loop:true,
        margin:60,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,

        responsive:{
            200:{
                items:3
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            },
            1400:{
                items:7
            },
            2000:{
                items:10
            }
        }
    });

    $('.work-carousel').owlCarousel({
        // loop:true,
        autoHeight:true,
        margin:10,
        dots:true,
        dotsEach:true,
        animateOut: 'fadeOut',

        responsive:{
            200:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:3
            },
            2000:{
                items:3
            }
        }
    });
});









// var rafId = null;
// var delay = 200;
// var lTime = 0;

// function scroll() {
//   var scrollTop = $(window).scrollTop();
//   var height = $(window).height();
//   var visibleTop = scrollTop + height;
//   $('.reveal').each(function() {
//     var $t = $(this);
//     if ($t.hasClass('reveal_visible')) { return; }
//     var top = $t.offset().top;
//     if (top <= visibleTop) {
//       if (top + $t.height() < scrollTop) {
//         $t.removeClass('reveal_pending').addClass('reveal_visible');
//       } else {
//         $t.addClass('reveal_pending');
//         if (!rafId) requestAnimationFrame(reveal);  
//       }
//     }
//   });
// }
// function reveal() {
//   rafId = null;
//   var now = performance.now();
  
//   if (now - lTime > delay) {
//     lTime = now;
//     var $ts = $('.reveal_pending');
//     $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');  
//   }
  
  
//   if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
// }

// $(scroll);
// $(window).scroll(scroll);
// $(window).click(function() {
//   $('.reveal').removeClass('reveal_visible').removeClass('reveal_pending');
//   lTime = performance.now() + 500;
//   var top = $(window).scrollTop();
//   $(window).scrollTop(top === 0 ? 1 : top-1);
// });