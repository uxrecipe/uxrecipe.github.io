
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


// popover initialization
$(function () {
  $('[data-toggle="popover"]').popover()

})

// $(function () { 
//   $("#pop-planning").popover('show');
// });


$().ready(function(){
  window.setTimeout(function(){
  	$('#pop-planning').popover('show').fadeIn(1000);
	}, 10000);
    
  window.setTimeout(function(){
    $('#pop-planning').popover('hide');
  }, 17000); 
});





