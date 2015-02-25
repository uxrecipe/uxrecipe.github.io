
// launch labeluaty
$(document).ready(function(){
    $(":checkbox").labelauty();
    $(":radio").labelauty();
    $('[data-toggle="popover"]').popover();
    window.setTimeout(function(){
  	$('#pop-planning').popover('show').fadeIn(1000);
    }, 10000);
    
    window.setTimeout(function(){
        $('#pop-planning').popover('hide');
    }, 17000); 
    
    // smooth scroll
     $('a').click(function(){
        $('html, body').animate({
           scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
     });
});









