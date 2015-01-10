$(document).ready(function(){
    $(":checkbox").labelauty();
});



$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).attr("value")=="Expert"){
            $(".result").toggle();
        }
    });
});