/**
 * Remove squared button style
 *
* @since devlion_wptheme 1.0
 */
/* jQuery */

(function ($) {
    $(document).ready(function () {
        function delay(callback, ms) {
            var timer = 0;
            return function() {
              var context = this, args = arguments;
              clearTimeout(timer);
              timer = setTimeout(function () {
                callback.apply(context, args);
              }, ms || 0);
            };
          }

        const mainSlider = $('.block-project-adv');
        const navCards = mainSlider.find('.adv-block-navs-card');
        const imagesBlock = mainSlider.find('.block-project-adv-content');
        let firstBlockImg = true;

        imagesBlock.find('.adv-block-content-img').each(function(){
            // $(this).hide();
            // console.log('123');
            if (!firstBlockImg) {
                $(this).css('display', 'none');
            } 
            firstBlockImg = false;
        });

        function setActive(el) {
            navCards.removeClass('active');
            el.addClass('active');
        }

        function showImg(dataColor) {
            const selector = "[data-card-color='" + dataColor + "']";
            imagesBlock.find('.adv-block-content-img').each(function(){
                $(this).hide();
                // $(this).attr('display', 'none');
            });
            const findSelector =  imagesBlock.find(selector);
            // findSelector.attr('display', 'flex');
            findSelector.toggle('drop');
        }

        let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

        //set active
        function twoSliderActive(e){
            return function (e) {
                e.stopPropagation();
                if ($(this).hasClass('active')) {
                    return
                } else {
                    setActive($(this));
    
                    const dataColor = $(this).data('card-color');
                    showImg(dataColor);
                }
            }
        }

        if (isMobile) {
            navCards.click(
                delay(twoSliderActive (this), 300)
            )
        } else {
            navCards.hover(
                delay(twoSliderActive (this), 300)
            )
        }


    });
}(jQuery));
