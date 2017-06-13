/* ====================================
   Onload functions
   ==================================== */

$(function() {
    /*show mobile menu*/
    $('.fa-navicon').click(function() {
        $(this).toggleClass('is-active');
        $(".mobile__menu").slideToggle('fast');
    });
});
