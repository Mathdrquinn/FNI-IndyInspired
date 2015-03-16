$(document).ready(function() {
    console.log(window.map)

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

});