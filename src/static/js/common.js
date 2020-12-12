$(document).ready(function () {
    $('.showmenu').click(function () {
        $(this).toggleClass('is-active')
        $('.dropdownmenu').fadeToggle()
    })

    $('.selectcustom select').selectric()

    var screenWidth = $(window).width();

    if (screenWidth < 700) {
        $('.tabbuttons li').click(function () {
            var tab = $(this).attr('data-tab');
            $('.tabcontent__item').not(tab).css({ 'display': 'none' });
            $('.tabcontent').fadeIn()
            if (tab == '#tab2') {
                $('.tabcontent').addClass('wheat')
            }
            if (tab == '#tab3') {
                $('.tabcontent').addClass('green')
            }
            $(tab).fadeIn(400);

        });
        $('.tabbuttons li:first').click();
        $('.closetab').click(function () {
            $('.tabcontent').removeClass('green').removeClass('wheat')
            $('.tabcontent__item').fadeOut()
            $('.tabcontent').fadeOut()
        })
    } else {
        $('.tabbuttons li').click(function () {
            $('.tabbuttons li').removeClass('is-active');
            $(this).addClass('is-active');
            var tab = $(this).attr('data-tab');
            $('.tabcontent__item').not(tab).css({ 'display': 'none' });
            $(tab).fadeIn(400);
        });
        $('.tabbuttons li:first').click();
    }
});

