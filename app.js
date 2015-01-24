
// launch labeluaty
$(document).ready(function(){
    $(":checkbox").labelauty();
});

$(document).ready(function(){
    $(":radio").labelauty();
});


// smooth scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
