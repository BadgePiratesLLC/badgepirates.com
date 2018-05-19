(function ($) {
	"use strict";

    var $window = $(window),
            $body = $('body');

    jQuery(document).ready(function($){

				/*======== Modal js ===========*/
				$("#hacker-1, #hacker-2, #hacker-3, #hacker-4, #hacker-5").on('hidden.bs.modal', function (e) {
						$("#hacker-1 iframe, #hacker-2 iframe, #hacker-3 iframe, #hacker-3 iframe, #hacker-4 iframe, #hacker-5 iframe").attr("src", $("hacker-1 iframe, #hacker-2 iframe, #hacker-3 iframe, #hacker-3 iframe, #hacker-4 iframe, #hacker-5 iframe").attr("src"));
				});

        /*======== Sticky header ===========*/
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });

        /*======== Smoothscroll js ===========*/
        $(function() {
          $('a.smoth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
          });
        });

        /*======== jquery scroll spy ===========*/
        $body.scrollspy({
            target : ".navbar-collapse",
            offset : 95
        });

        /*========  Bootstrap menu fix ===========*/
        $(".navbar-toggle").on("click", function(){
            $body.addClass("mobile-menu-activated");
        });

        $("ul.nav.navbar-nav li a").on("click", function(){
            $(".navbar-collapse").removeClass("in");
        });

        /*======== background-image flickering solution for mobile ===========*/
        var bg = jQuery("#home");
        function resizeBackground() {
            bg.height(jQuery(window).height() + 60);
        }
      	resizeBackground();

        /*======== Intro typer ===========*/
        // var element = $(".element");
        // $(function() {
        //     element.typed({
        //         strings: ["Web Designer.", "Graphic Designer.", "Freelancer."],
        //         typeSpeed: 100,
        //         loop: true,
        //     });
        // });

        /*======== Parallax js ===========*/
        $window.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });

        /*======== Magnific Popup ===========*/
        $('.work-popup').magnificPopup({type:'image'});


        /*========   WOW js===========*/
        new WOW({ mobile: false }).init();

        /*======== jQuery mixItUp ===========*/
        $('.work-inner').mixItUp();
    });


    $window.on('load', function(){

        /*======== Preloder ===========*/
       setTimeout(function() {
            $('body').addClass('loaded');
        }, 500);

    });

}(jQuery));
