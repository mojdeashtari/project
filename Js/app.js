$(document).ready(function() {
    $('.dropdown').click(function() {
        $(this).find('.dropdown-items').toggleClass('open');
    });
});