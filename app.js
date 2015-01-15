
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


// show/hide table
$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).attr("value")=="Expert"){
            $(".result").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Client"){
            $(".result2").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Competitor"){
            $(".result3").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Requirements"){
            $(".result4").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="SEO"){
            $(".result5").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Mobile"){
            $(".result6").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Contextual"){
            $(".result7").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Surveys"){
            $(".result8").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Personas"){
            $(".result9").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="User"){
            $(".result10").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Storyboards"){
            $(".result11").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Journey"){
            $(".result12").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Sitemap"){
            $(".result13").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Card Sorting"){
            $(".result14").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="IA"){
            $(".result15").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Sketching"){
            $(".result16").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Wireframes"){
            $(".result17").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Styleguide"){
            $(".result18").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Mockups"){
            $(".result19").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Prototyping"){
            $(".result20").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="AB"){
            $(".result21").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Guerilla"){
            $(".result22").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Lab"){
            $(".result23").fadeToggle( 300, "linear" );
        }
        if($(this).attr("value")=="Remote"){
            $(".result24").fadeToggle( 300, "linear" );
        }
    });
});


// create the hashtag modals
document.getElementById('planning').onclick = function(){
	swal({
  title: 'Planning',
  width: 700,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};


document.getElementById('research').onclick = function(){
	swal({
  title: 'Research',
  width: 700,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};

document.getElementById('exploration').onclick = function(){
	swal({
  title: 'Exploration',
  width: 700,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};


document.getElementById('testing').onclick = function(){
	swal({
  title: 'Testing',
  width: 700,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};

document.getElementById('design').onclick = function(){
	swal({
  title: 'Design',
  width: 700,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};

document.getElementById('information').onclick = function(){
	swal({
  title: 'Information Architecture',
  width: 700,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tagsand other HTML tags'
});
};



