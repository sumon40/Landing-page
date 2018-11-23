(function ( $ ) {
    "use strict";

    // script for preloader
    $(window).on('load', function () {
        $(".preloader_content").fadeOut(500);
    });

    // var for back to top
    var $top = $('.back-top');
    var $top_offset = 300;

    // var for header_fix
    var $header = $('header');
    var $header_fix = 'header_fix';
    var $t_offset = $('header').offset().top;

    // script for header_fix
    $(window).scroll(function(){
        if($(this).scrollTop() > $t_offset){
            $header.addClass($header_fix);
            $header.next().css('paddingTop',$t_offset);
        }else{
            $header.removeClass($header_fix);
            $header.next().css('paddingTop','0px');
            
        }
        if($(this).scrollTop() >= $top_offset) {
            $top.fadeIn();
        }else{
            $top.fadeOut();
        }
    });
    // $(window).scroll(function(){
    //     if ($(window).scrollTop() >= 300) {
    //        $header.addClass('header_fix');
    //     }
    //     else {
    //        $header.removeClass('header_fix');
    //     }
    // });

    // script for back to top
    var $html = $('html');
    $top.on('click',function () {
       $html.animate({
        scrollTop:0
       },700);
    });

    // script for mobile menu
    var $menu_bar = $('.manubar');
    var $menu = $('.menu');
    var $overlay = $("<div class='overlay'></div>");
    $('body').append($overlay);
    $overlay.hide();
    $menu_bar.on("click",function(){
        $menu.toggleClass('open');
        $menu_bar.children().toggleClass('close');
        $overlay.toggle();
    });
    $overlay.on("click",function(){
        $menu.removeClass('open');
        $menu_bar.children().removeClass('close');
        $overlay.hide();
    });

    // script for home_slider
    $('.home_slider').owlCarousel({
        loop: true,
        dots:false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        vertical: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // videos script
   $("a.video_play").YouTubePopUp( { autoplay: true } );

    // script for team_slider
    $('.team_slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    // script for blog_slider
    $('.blog_slider').owlCarousel({
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


     // sceript for scroll section
   $.scrollIt({
        easing: 'linear',
        scrollTime: 800,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -50
    });


    // script for form effect
    var $effect = $('.effect');
    $effect.focusin(function () {
        $(this).prev().addClass('focus');
    });
    $effect.blur(function () {
        if ($(this).val() === "") {
            $(this).prev().removeClass('focus');
        } else {
            $(this).prev().addClass('focus');
        }
    });

    // script for some content animated
    var controller = new ScrollMagic.Controller();
    // animated slide up
    $('.slide_up').each(function(){
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        .setClassToggle(this, 'fade_up') // add class to project01
        .addTo(controller);

    });
    // animated slide scale 0 to 1
    $('.slide_lf').each(function(){
        var ourScene1 = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.7
        })
        .setClassToggle(this, 'fade_lf') // add class to project01
        .addTo(controller);

    });
    // animated slide height 0 to 100%
    $('.slide_rf').each(function(){
        var ourScene2 = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.7
        })
        .setClassToggle(this, 'fade_rf') // add class to project01
        .addTo(controller);

    });


})(jQuery);