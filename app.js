$(document).ready(function(){
    $(":checkbox").labelauty();
});



$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).attr("value")=="Expert"){
            $(".result").toggle();
        }
        if($(this).attr("value")=="Expert2"){
            $(".result2").toggle();
        }
    });
});