(function ($) {
    "use strict";

    // ================================
    // Spinner
    // ================================
    var spinner = function () {
        setTimeout(function () {
            const $spinner = $('#spinner');
            if ($spinner.length > 0) {
                $spinner.removeClass('show');
            }
        }, 500); // Changed delay from 1ms to 500ms for smoother effect
    };
    spinner();
    

    // ================================
    // Initiate WOW.js animations
    // ================================
    new WOW().init();


    // ================================
    // Facts counter animation
    // ================================
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // ================================
    // Typed.js text animation
    // ================================
    if ($('.typed-text-output').length) {
        var typed_strings = $('.typed-text').text().split(', ');
        new Typed('.typed-text-output', {
            strings: typed_strings,
            typeSpeed: 100,
            backSpeed: 40, // increased for smoother feel
            smartBackspace: true,
            loop: true
        });
    }


    // ================================
    // Smooth scroll for buttons
    // ================================
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1200, 'easeInOutExpo'); // adjusted speed
        }
    });
    
    
    // ================================
    // Skills progress bar animation
    // ================================
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '75%' }); // adjusted offset for earlier trigger


    // ================================
    // Portfolio isotope filter
    // ================================
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // ================================
    // Testimonials carousel
    // ================================
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1200,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // ================================
    // Back to top button
    // ================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutExpo');
        return false;
    });

})(jQuery);
