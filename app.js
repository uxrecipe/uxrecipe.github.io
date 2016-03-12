
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


    swal({
      title: 'UX Recipe app is now available on the Apple Store!',
      text: 'We have been working hard to bring the app to life and that time has arrived: the iOS version is live. It has already been featured on Product Hunt and it passed over 1700 downloads.',
      imageUrl: 'img/iosapp.jpg',
      animation: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Stay on site',
      confirmButtonText: 'Get iOS app (Free)',
      closeOnConfirm: false
    },
    function(){
      window.location.href = 'https://itunes.apple.com/us/app/ux-recipe/id1078077486?ls=1&mt=8';
    })

//     $(document).ready(function() {
// swal({ 
//   title: "Error",
//    text: "wrong user or password",
//     type: "error" 
//   },
//   function(){
//     window.location.href = 'login.html';
// });

});

//html2canvas
function htmlcanvas() {
  $( '.toggle-visible' ).css( 'visibility', 'hidden' );
  $( '#conclusion' ).css( 'margin-top', '-110px' );
  html2canvas($('.save-as-image'), {
    
    onrendered: function(canvas) {
      $( '.toggle-visible' ).css( 'visibility', 'visible' );
      $( '#conclusion' ).css( 'margin-top', '-40px' );
    
      var img = canvas.toDataURL()
      
      window.open(img);
    
      }
  });
}








