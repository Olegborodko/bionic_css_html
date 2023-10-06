(function ($) {
    $(document).ready(function () {
        var swiper = new Swiper('.home-slider-swiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                1400: {
                  slidesPerView: 3
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                1: {
                  slidesPerView: 1,
                }
            }
      /*       navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }, */
        });


      /* ============ */ 
      
      var swiper = new Swiper('.swiper-carousel-reviews', {
        slidesPerView: 'auto',
        spaceBetween: 120,
        centeredSlides: true,
        loop: true,

        pagination: {
          el: '.swiper-scrollbar',
          hide: true,
          clickable: true
        }
      });

      /* ========== */

      var swiper = new Swiper('.swiper-last', {
        // slidesPerView: 'auto',
        // spaceBetween: 20,
        // centeredSlides: true,
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          clickable: true
        }
      });

      /* ========== */
      var swiper = new Swiper('.swiper-carousel-reviews-one', {
        slidesPerView: 'auto',
        spaceBetween: 100,
        centeredSlides: true,
        loop: true,

        pagination: {
          el: '.swiper-scrollbar',
          hide: true,
          clickable: true
        }
      });

      /* =========== */
      $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
      });

    });
}(jQuery));
