$(document).ready(function() {

    if(viewPort < 642 || true) {
        window.mySwiper = new Swiper('.swiper-container',{
            direction:'horizontal',
            loop: true,
            //pagination: '#dot-inner',
            //paginationClickable: true,
            keyboardControl: true,
            autoplay: false,
            autoplayDisableInteraction: true
        });
        mySwiper.onSlideChangeStart = function(swiper){
            console.log('change!');
            console.log(mySwiper.activeSlide() + ' is active -----------------------')

            name = mySwiper.activeSlide().data('name');
            console.log(name + ' is name of active slide');
            activePair = window[name];
            console.log(map.getCenter().k)
            console.log(activePair.center.lat)

            if (map.getCenter().k !== activePair.center.lat) {
                if (activePair.previous) {
                    activePair.previous.reset();
                }
                if (activePair.next) {
                    activePair.next.reset();
                }
                activePair.highlight();

            }
        };

        $('.arrow-left').on('click', function() {
            console.log('click!');
            var $this = $(this);
            var parent = $this.parent('.pair-text');

            if (parent.hasClass('move-in')) {
                parent.removeClass('move-in');
                $this.find('img').attr('src', 'arrows/arrow-left.png')
            }
            else {
                $this.parent('.pair-text').addClass('move-in');
                $this.find('img').attr('src', 'arrows/arrow-right.png')
            }
        });
    }
    else {
        console.log('viewport too large')
        //var mySwiper = new Swiper('.swiper-container',{
        //    mode:'horizontal',
        //    loop: true,
        //    pagination: '#dot-inner',
        //    paginationClickable: true,
        //    keyboardControl: true
        //});
    }

});