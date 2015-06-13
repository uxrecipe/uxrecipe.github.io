
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

//html2canvas
function htmlcanvas() {
  $( '.toggle-visible' ).css( 'visibility', 'hidden' );
  html2canvas($('.save-as-image'), {
    
    onrendered: function(canvas) {
      $( '.toggle-visible' ).css( 'visibility', 'visible' );
    
      var img = canvas.toDataURL()
      
      window.open(img);
    
      }
  });
}








