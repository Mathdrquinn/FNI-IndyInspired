console.log('functions');

var glassesContainer = $('#glasses-container').offset().top;

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

$('#glasses-container').on('scroll', function () {
    var $this = $(this);
    var scroll = $this.scrollTop();

    var glasses = $('.pair-container');

    function primary(el) {

        var $el = $(el)
        var elTop = $el.offset().top;

        if (elTop) {
            //console.log('in statement')

            var top = elTop - glassesContainer + 60;  // 60 is for some give on the scroll

            var inView = top > 0 && top < $el.height();

            if (inView) {
                console.log($el.find('h3').text() + '------------------------');
                name = $el.data('name');
                console.log(name);
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
            }

        }

        //if(inView) {
        //
        //    console.log('glassesContainer: ' + glassesContainer)
        //    console.log($el);
        //    console.log('element offset: ' + $el.offset().top)
        //    console.log('element height: ' + $el.height())
        //    console.log('glassesContainer: ' + glassesContainer)
        //    //console.log($el.offset().top - glassesContainer + $el.height());
        //    console.log('scroll: ' + scroll)
        //    console.log($el.offset().top - glassesContainer)
        //
        //    console.log($el.find('h3').text());
        //}
    }

    for (el in glasses) {
        primary(glasses[el]);
    }


});