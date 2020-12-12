$(document).ready(function () {
    $('.showmenu').click(function () {
        $(this).toggleClass('is-active')
        $('.dropdownmenu').fadeToggle()
    })

    $('.selectcustom select').selectric()

});

