$(document).ready(function() {
    "use strict";

    // Sticky nav
    $("#sticky-nav").sticky({
        topSpacing: 0
    });

    // Nav
    $('#example-one').onePageNav({
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: ':not(.external)'
    });

    $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        $('.main-navigation a[href="' + target + '"]').addClass('active');
        $('.main-navigation a:not([href="' + target + '"])').removeClass('active');
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

    // Portfolio
    jQuery(window).on('load', function() {
        var $ = jQuery;
        $('.portfolio').masonry({
            itemSelector: '.portfolio-post',
            columnWidth: '.portfolio-post',
            percentPosition: true
        });
    })

    // //Tooltip
    // $('.tooltipped').tooltip({
    //     delay: 50
    // });

    jQuery(document).ready(function($) {
        var timelineBlocks = $('.cd-timeline-block'),
            offset = 0.8;

        //hide timeline blocks which are outside the viewport
        hideBlocks(timelineBlocks, offset);

        //on scolling, show/animate timeline blocks when enter the viewport
        $(window).on('scroll', function() {
            (!window.requestAnimationFrame) ?
            setTimeout(function() {
                showBlocks(timelineBlocks, offset);
            }, 100): window.requestAnimationFrame(function() {
                showBlocks(timelineBlocks, offset);
            });
        });

        function hideBlocks(blocks, offset) {
            blocks.each(function() {
                ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
            });
        }

        function showBlocks(blocks, offset) {
            blocks.each(function() {
                ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            });
        }
    });

    //wow
    new WOW().init();

});