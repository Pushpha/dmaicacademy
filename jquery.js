$(document).ready(function() {

    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function() {

        if ($(window).scrollTop() > 20) {

            $('#header').css('top', '0');

            $('.fa-bars').removeClass('fa-times');
            $('nav').removeClass('nav-toggle');

        } else {
            $('#header').css('top', '-100%');
        }
    });

});
document.addEventListener('DOMContentLoaded', nav)

function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}