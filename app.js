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


document.getElementById('planning').onclick = function(){
	swal({
  title: 'Planning',
  width: 800,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};


document.getElementById('research').onclick = function(){
	swal({
  title: 'Research',
  width: 800,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};

document.getElementById('exploration').onclick = function(){
	swal({
  title: 'Exploration',
  width: 800,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};


document.getElementById('testing').onclick = function(){
	swal({
  title: 'Testing',
  width: 800,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};

document.getElementById('design').onclick = function(){
	swal({
  title: 'Design',
  width: 800,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};

document.getElementById('information').onclick = function(){
	swal({
  title: 'Information Architecture',
  width: 800,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tags'
});
};



