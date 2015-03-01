//calculate the sum  // PDC

var calculate = function(id) {
  var sum = 0;
  $('input[name^='+id+']').each(function() {
    sum += Number($(this).val());
  });
  return sum;
}

$('.calculate-me').on('click', function(event) {
  event.preventDefault();

  $('.hours').html(calculate('p'));
  $('.cost').html(calculate('c'));

  $("#conclusion").fadeIn( 300, "linear" );

});
