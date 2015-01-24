
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


// create the hashtag modals
document.getElementById('planning').onclick = function(){
	swal({
  title: 'Planning',
  width: 700,
  confirmButtonText: 'Ok! I found what I interested me.',
  html:
    '<h5 style="margin-bottom: -5px;">Expert Review<h5>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Description goes here</p>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Useful links: ' + '<a href=""> Link1 </a>' + ' | ' +'<a href=""> Link1 </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Expert Review<h5>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Description goes here</p>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Useful links: ' + '<a href=""> Link1 </a>' + ' | ' +'<a href=""> Link1 </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Expert Review<h5>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Description goes here</p>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Useful links: ' + '<a href=""> Link1 </a>' + ' | ' +'<a href=""> Link1 </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Expert Review<h5>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Description goes here</p>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Useful links: ' + '<a href=""> Link1 </a>' + ' | ' +'<a href=""> Link1 </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Expert Review<h5>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Description goes here</p>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Useful links: ' + '<a href=""> Link1 </a>' + ' | ' +'<a href=""> Link1 </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' +
    '<h5 style="margin-bottom: -5px; margin-top:20px;">Expert Review<h5>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Description goes here</p>' +
    '<p style="margin-bottom: 5px; font-size: 12px">Useful links: ' + '<a href=""> Link1 </a>' + ' | ' +'<a href=""> Link1 </a>' +' </p>'+
    '<small>UX Recipe Template:' + '<em>coming soon</em>'+ '</small>' 
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


document.getElementById('prototyping').onclick = function(){
	swal({
  title: 'Prototyping',
  width: 700,
  html:
    'You can use <b>bold text</b>, ' +
    ' <a href="//github.com">links</a> ' +
    'and other HTML tag.'
});
};



//add remove rows
$('input[value="Expert"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result1" class="result"> <td class="col-md-4"> <h6>Expert Review</h6> </td> <td> <input id="p1" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="d1" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="c1" type="number"  value="0" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result1').remove();
    }

});

$('input[value="Client"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result2" class="result2"> <td class="col-md-4"> <h6>Stakeholder Workshop</h6> </td> <td> <input  id="p2" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="d2" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="c2" type="number"  value="0" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result2').remove();
    }

});

$('input[value="Competitor"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result3" class="result3"> <td class="col-md-4"> <h6>Competitor Analysis</h6> </td> <td> <input  id="p3" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="d3" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="c3" type="number"  value="0" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result3').remove();
    }

});

$('input[value="Requirements"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result4" class="result4"> <td class="col-md-4"> <h6>Requirements Analysis</h6> </td> <td> <input  id="p4" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="d4" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="c4" type="number"  value="0" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result4').remove();
    }

});





//add remove rows
$('input[value="SEO"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result5" class="result5"> <td class="col-md-4"> <h6>SEO & Analytics</h6> </td> <td> <input type="number"  id="p5" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="d5" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="c5" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result5').remove();
    }

});

$('input[value="Mobile"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result6" class="result6"> <td class="col-md-4"> <h6>Mobile Assesment</h6> </td> <td> <input type="number" id="p6" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  id="d6" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="c6" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result6').remove();
    }

});

$('input[value="Contextual"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result7" class="result7"> <td class="col-md-4"> <h6>Observational Research</h6> </td> <td> <input type="number"  id="p7" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="d7" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="c7" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result7').remove();
    }

});

$('input[value="Surveys"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result8" class="result8"> <td class="col-md-4"> <h6>Surveys</h6> </td> <td> <input type="number"  id="p8" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="d8" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="c8" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result8').remove();
    }

});



//add remove rows
$('input[value="Personas"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result9" class="result9"> <td class="col-md-4"> <h6>Persona</h6> </td> <td> <input type="number" id="p9" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d9" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c9" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result9').remove();
    }

});

$('input[value="User"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result10" class="result10"> <td class="col-md-4"> <h6>User Flow</h6> </td> <td> <input type="number" id="p10" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="d10" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c10" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result10').remove();
    }

});

$('input[value="Storyboards"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result11" class="result11"> <td class="col-md-4"> <h6>Storyboards</h6> </td> <td> <input type="number" id="p11" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d11" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c11" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result11').remove();
    }

});

$('input[value="Journey"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result12" class="result12"> <td class="col-md-4"> <h6>Journey Maps</h6> </td> <td> <input type="number" id="p12" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d12" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c12" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result12').remove();
    }

});







//add remove rows
$('input[value="Sitemap"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result13" class="result13"> <td class="col-md-4"> <h6>Sitemap</h6> </td> <td> <input type="number" id="p13" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d13" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c13" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result13').remove();
    }

});

$('input[value="Card Sorting"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result14" class="result14"> <td class="col-md-4"> <h6>Card Sorting</h6> </td> <td> <input type="number" id="p14" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d14" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c14" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result14').remove();
    }

});

$('input[value="IA"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result15" class="result15"> <td class="col-md-4"> <h6>IA</h6> </td> <td> <input type="number" id="p15" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d15" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c15" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result15').remove();
    }

});

$('input[value="Sketching"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result16" class="result16"> <td class="col-md-4"> <h6>Sketching</h6> </td> <td> <input type="number" id="p16" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"   id="d16" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c16" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result16').remove();
    }

});






//add remove rows
$('input[value="Wireframes"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result17" class="result17"> <td class="col-md-4"> <h6>Wireframes</h6> </td> <td> <input type="number" id="p17" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d17" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c17" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result17').remove();
    }

});

$('input[value="Styleguide"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result18" class="result18"> <td class="col-md-4"> <h6>Styleguide</h6> </td> <td> <input type="number" id="p18" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d18" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c18" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result18').remove();
    }

});

$('input[value="Mockups"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result19" class="result19"> <td class="col-md-4"> <h6>Mockups</h6> </td> <td> <input type="number" id="p19" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d19" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c19" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result19').remove();
    }

});

$('input[value="Prototyping"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result20" class="result20"> <td class="col-md-4"> <h6>Prototyping</h6> </td> <td> <input type="number" id="p20" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d20" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c20" value="0" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result20').remove();
    }

});



//add remove rows
$('input[value="AB"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result21" class="result21"> <td class="col-md-4"> <h6>A/B Testing</h6> </td> <td> <input type="number" id="p21" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d21" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c21" value="0" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result21').remove();
    }

});

$('input[value="Guerilla"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result22" class="result22"> <td class="col-md-4"> <h6>Guerilla Testing</h6> </td> <td> <input type="number" id="p22" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d22" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c22" value="0" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result22').remove();
    }

});

$('input[value="Lab"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result23" class="result23"> <td class="col-md-4"> <h6>Lab Testing</h6> </td> <td> <input type="number" id="p23" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d23" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c23" value="0" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result23').remove();
    }

});

$('input[value="Remote"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result24" class="result24"> <td class="col-md-4"> <h6>Remote Testing</h6> </td> <td> <input type="number" id="p24" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d24" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c24" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result24').remove();
    }

});


$('input[value="Paper"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result25" class="result25"> <td class="col-md-4"> <h6>Paper Prototyping</h6> </td> <td> <input type="number" id="p25" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d25" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c25" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result25').remove();
    }

});

$('input[value="HTML"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result26" class="result26"> <td class="col-md-4"> <h6>HTML Demo</h6> </td> <td> <input type="number" id="p26" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d26" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c26" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result26').remove();
    }

});

$('input[value="Interactive"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result27" class="result27"> <td class="col-md-4"> <h6>Interactive Design</h6> </td> <td> <input type="number" id="p27" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d27" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c27" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result27').remove();
    }

});

$('input[value="Showcase"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result28" class="result28"> <td class="col-md-4"> <h6>Mobile Showcase</h6> </td> <td> <input type="number" id="p28" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d28" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c28" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result28').remove();
    }

});



//
//The new ones
$('input[value="Interview"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result29" class="result29"> <td class="col-md-4"> <h6>Stakeholder Interview</h6> </td> <td> <input type="number" id="p29" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d29" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c29" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result29').remove();
    }

});

$('input[value="Debriefing"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result30" class="result30"> <td class="col-md-4"> <h6>Debriefing</h6> </td> <td> <input type="number" id="p30" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d30" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c30" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result30').remove();
    }

});

$('input[value="Ethnographic"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result31" class="result31"> <td class="col-md-4"> <h6>Ethnographic Research</h6> </td> <td> <input type="number" id="p31" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d31" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c31" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result31').remove();
    }

});

$('input[value="Market"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result32" class="result32"> <td class="col-md-4"> <h6>Market Research</h6> </td> <td> <input type="number" id="p32" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d32" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c32" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result32').remove();
    }

});



$('input[value="Photo"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result33" class="result33"> <td class="col-md-4"> <h6>Photo Ethnography</h6> </td> <td> <input type="number" id="p33" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d33" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c33" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result33').remove();
    }

});

$('input[value="Anthropology"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result34" class="result34"> <td class="col-md-4"> <h6>Visual Anthropology</h6> </td> <td> <input type="number" id="p34" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d34" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c34" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result34').remove();
    }

});

$('input[value="Demographics"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result35" class="result35"> <td class="col-md-4"> <h6>Demographics</h6> </td> <td> <input type="number" id="p35" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d35" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c35" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result35').remove();
    }

});

$('input[value="Focus"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result36" class="result36"> <td class="col-md-4"> <h6>Focus Groups</h6> </td> <td> <input type="number" id="p36" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d36" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c36" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result36').remove();
    }

});


$('input[value="Psychographics"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result37" class="result37"> <td class="col-md-4"> <h6>Psychographics</h6> </td> <td> <input type="number" id="p37" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d37" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c37" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result37').remove();
    }

});

$('input[value="Documentation"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result38" class="result38"> <td class="col-md-4"> <h6>Documentation</h6> </td> <td> <input type="number" id="p38" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d38" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c38" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result38').remove();
    }

});

$('input[value="Stories"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result39" class="result39"> <td class="col-md-4"> <h6>User Stories</h6> </td> <td> <input type="number" id="p39" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d39" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c39" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result39').remove();
    }

});

$('input[value="Acceptance"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result40" class="result40"> <td class="col-md-4"> <h6>Acceptance Criteria</h6> </td> <td> <input type="number" id="p40" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d40" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c40" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result40').remove();
    }

});

$('input[value="QOC"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result41" class="result41"> <td class="col-md-4"> <h6>Questions, Options, Criteria</h6> </td> <td> <input type="number" id="p41" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d41" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c41" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result41').remove();
    }

});

$('input[value="Audit"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result42" class="result42"> <td class="col-md-4"> <h6>Content Audit</h6> </td> <td> <input type="number" id="p42" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d42" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c42" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result42').remove();
    }

});


$('input[value="Inventory"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result43" class="result43"> <td class="col-md-4"> <h6>Content Inventory</h6> </td> <td> <input type="number" id="p43" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d43" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c43" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result43').remove();
    }

});

$('input[value="Brainstorming"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result44" class="result44"> <td class="col-md-4"> <h6>Brainstorming</h6> </td> <td> <input type="number" id="p44" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d44" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c44" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result44').remove();
    }

});


$('input[value="OrgSchemes"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result45" class="result45"> <td class="col-md-4"> <h6>Organisation Schemes</h6> </td> <td> <input type="number" id="p45" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d45" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c45" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result45').remove();
    }

});

$('input[value="OrgStructure"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result46" class="result46"> <td class="col-md-4"> <h6>Organisation Structure</h6> </td> <td> <input type="number" id="p46" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d46" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c46" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result46').remove();
    }

});


$('input[value="DoGo"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result47" class="result47"> <td class="col-md-4"> <h6>DoGo Mapping</h6> </td> <td> <input type="number" id="p47" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d47" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c47" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result47').remove();
    }

});


$('input[value="Tiles"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result48" class="result48"> <td class="col-md-4"> <h6>Style Tiles</h6> </td> <td> <input type="number" id="p48" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d48" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c48" value="0"  class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result48').remove();
    }

});


//calculate the sum  // PDC
 function sum() 
{ 
		
    //These are 
    //the people

    if (document.getElementById('p1') != null) {
		var p1 = document.getElementById("p1").value;
		}
		else {
		var p1 = 0;
		}

    if (document.getElementById('p2') != null) {
		var p2 = document.getElementById("p2").value;
		}
		else {
		var p2 = 0;
		}

    if (document.getElementById('p3') != null) {
		var p3 = document.getElementById("p3").value;
		}
		else {
		var p3 = 0;
		}

    if (document.getElementById('p4') != null) {
		var p4 = document.getElementById("p4").value;
		}
		else {
		var p4 = 0;
		}

    if (document.getElementById('p5') != null) {
		var p5 = document.getElementById("p5").value;
		}
		else {
		var p5 = 0;
		}

    if (document.getElementById('p6') != null) {
		var p6 = document.getElementById("p6").value;
		}
		else {
		var p6 = 0;
		}

    if (document.getElementById('p7') != null) {
		var p7 = document.getElementById("p7").value;
		}
		else {
		var p7 = 0;
		}

    if (document.getElementById('p8') != null) {
		var p8 = document.getElementById("p8").value;
		}
		else {
		var p8 = 0;
		}

    if (document.getElementById('p9') != null) {
		var p9 = document.getElementById("p9").value;
		}
		else {
		var p9 = 0;
		}

    if (document.getElementById('p10') != null) {
		var p10 = document.getElementById("p10").value;
		}
		else {
		var p10 = 0;
		}

    if (document.getElementById('p11') != null) {
		var p11 = document.getElementById("p11").value;
		}
		else {
		var p11 = 0;
		}

    if (document.getElementById('p12') != null) {
		var p12 = document.getElementById("p12").value;
		}
		else {
		var p12 = 0;
		}

    if (document.getElementById('p13') != null) {
		var p13 = document.getElementById("p13").value;
		}
		else {
		var p13 = 0;
		}

    if (document.getElementById('p14') != null) {
		var p14 = document.getElementById("p14").value;
		}
		else {
		var p14 = 0;
		}

    if (document.getElementById('p15') != null) {
		var p15 = document.getElementById("p15").value;
		}
		else {
		var p15 = 0;
		}

    if (document.getElementById('p16') != null) {
		var p16 = document.getElementById("p16").value;
		}
		else {
		var p16 = 0;
		}

    if (document.getElementById('p17') != null) {
		var p17 = document.getElementById("p17").value;
		}
		else {
		var p17 = 0;
		}

    if (document.getElementById('p18') != null) {
		var p18 = document.getElementById("p18").value;
		}
		else {
		var p18 = 0;
		}

    if (document.getElementById('p19') != null) {
		var p19 = document.getElementById("p19").value;
		}
		else {
		var p19 = 0;
		}

    if (document.getElementById('p20') != null) {
		var p20 = document.getElementById("p20").value;
		}
		else {
		var p20 = 0;
		}

    if (document.getElementById('p21') != null) {
		var p21 = document.getElementById("p21").value;
		}
		else {
		var p21 = 0;
		}

    if (document.getElementById('p22') != null) {
		var p22 = document.getElementById("p22").value;
		}
		else {
		var p22 = 0;
		}

    if (document.getElementById('p23') != null) {
		var p23 = document.getElementById("p23").value;
		}
		else {
		var p23 = 0;
		}

    if (document.getElementById('p24') != null) {
		var p24 = document.getElementById("p24").value;
		}
		else {
		var p24 = 0;
		}

		if (document.getElementById('p25') != null) {
		var p25 = document.getElementById("p25").value;
		}
		else {
		var p25 = 0;
		}

    if (document.getElementById('p26') != null) {
		var p26 = document.getElementById("p26").value;
		}
		else {
		var p26 = 0;
		}

    if (document.getElementById('p27') != null) {
		var p27 = document.getElementById("p27").value;
		}
		else {
		var p27 = 0;
		}

    if (document.getElementById('p28') != null) {
		var p28 = document.getElementById("p28").value;
		}
		else {
		var p28 = 0;
		}


    if (document.getElementById('p29') != null) {
		var p29 = document.getElementById("p29").value;
		}
		else {
		var p29 = 0;
		}

    if (document.getElementById('p30') != null) {
		var p30 = document.getElementById("p30").value;
		}
		else {
		var p30 = 0;
		}

    if (document.getElementById('p31') != null) {
		var p31 = document.getElementById("p31").value;
		}
		else {
		var p31 = 0;
		}

    if (document.getElementById('p32') != null) {
		var p32 = document.getElementById("p32").value;
		}
		else {
		var p32 = 0;
		}

    if (document.getElementById('p33') != null) {
		var p33 = document.getElementById("p33").value;
		}
		else {
		var p33 = 0;
		}

    if (document.getElementById('p34') != null) {
		var p34 = document.getElementById("p34").value;
		}
		else {
		var p34 = 0;
		}

    if (document.getElementById('p35') != null) {
		var p35 = document.getElementById("p35").value;
		}
		else {
		var p35 = 0;
		}

    if (document.getElementById('p36') != null) {
		var p36 = document.getElementById("p36").value;
		}
		else {
		var p36 = 0;
		}

    if (document.getElementById('p37') != null) {
		var p37 = document.getElementById("p37").value;
		}
		else {
		var p37 = 0;
		}

    if (document.getElementById('p38') != null) {
		var p38 = document.getElementById("p38").value;
		}
		else {
		var p38 = 0;
		}

    if (document.getElementById('p39') != null) {
		var p39 = document.getElementById("p39").value;
		}
		else {
		var p39 = 0;
		}

    if (document.getElementById('p40') != null) {
		var p40 = document.getElementById("p40").value;
		}
		else {
		var p40 = 0;
		}

    if (document.getElementById('p41') != null) {
		var p41 = document.getElementById("p41").value;
		}
		else {
		var p41 = 0;
		}

    if (document.getElementById('p42') != null) {
		var p42 = document.getElementById("p42").value;
		}
		else {
		var p42 = 0;
		}

    if (document.getElementById('p43') != null) {
		var p43 = document.getElementById("p43").value;
		}
		else {
		var p43 = 0;
		}

    if (document.getElementById('p44') != null) {
		var p44 = document.getElementById("p44").value;
		}
		else {
		var p44 = 0;
		}

    if (document.getElementById('p45') != null) {
		var p45 = document.getElementById("p45").value;
		}
		else {
		var p45 = 0;
		}

    if (document.getElementById('p46') != null) {
		var p46 = document.getElementById("p46").value;
		}
		else {
		var p46 = 0;
		}

    if (document.getElementById('p47') != null) {
		var p47 = document.getElementById("p47").value;
		}
		else {
		var p47 = 0;
		}

    if (document.getElementById('p48') != null) {
		var p48 = document.getElementById("p48").value;
		}
		else {
		var p48 = 0;
		}


    //These are 
    //the days

    if (document.getElementById('d1') != null) {
		var d1 = document.getElementById("d1").value;
		}
		else {
		var d1 = 0;
		}

    if (document.getElementById('d2') != null) {
		var d2 = document.getElementById("d2").value;
		}
		else {
		var d2 = 0;
		}

    if (document.getElementById('d3') != null) {
		var d3 = document.getElementById("d3").value;
		}
		else {
		var d3 = 0;
		}

    if (document.getElementById('d4') != null) {
		var d4 = document.getElementById("d4").value;
		}
		else {
		var d4 = 0;
		}

    if (document.getElementById('d5') != null) {
		var d5 = document.getElementById("d5").value;
		}
		else {
		var d5 = 0;
		}

    if (document.getElementById('d6') != null) {
		var d6 = document.getElementById("d6").value;
		}
		else {
		var d6 = 0;
		}

    if (document.getElementById('d7') != null) {
		var d7 = document.getElementById("d7").value;
		}
		else {
		var d7 = 0;
		}

    if (document.getElementById('d8') != null) {
		var d8 = document.getElementById("d8").value;
		}
		else {
		var d8 = 0;
		}

    if (document.getElementById('d9') != null) {
		var d9 = document.getElementById("d9").value;
		}
		else {
		var d9 = 0;
		}

    if (document.getElementById('d10') != null) {
		var d10 = document.getElementById("d10").value;
		}
		else {
		var d10 = 0;
		}

    if (document.getElementById('d11') != null) {
		var d11 = document.getElementById("d11").value;
		}
		else {
		var d11 = 0;
		}

    if (document.getElementById('d12') != null) {
		var d12 = document.getElementById("d12").value;
		}
		else {
		var d12 = 0;
		}

    if (document.getElementById('d13') != null) {
		var d13 = document.getElementById("d13").value;
		}
		else {
		var d13 = 0;
		}

    if (document.getElementById('d14') != null) {
		var d14 = document.getElementById("d14").value;
		}
		else {
		var d14 = 0;
		}

    if (document.getElementById('d15') != null) {
		var d15 = document.getElementById("d15").value;
		}
		else {
		var d15 = 0;
		}

    if (document.getElementById('d16') != null) {
		var d16 = document.getElementById("d16").value;
		}
		else {
		var d16 = 0;
		}

    if (document.getElementById('d17') != null) {
		var d17 = document.getElementById("d17").value;
		}
		else {
		var d17 = 0;
		}

    if (document.getElementById('d18') != null) {
		var d18 = document.getElementById("d18").value;
		}
		else {
		var d18 = 0;
		}

    if (document.getElementById('d19') != null) {
		var d19 = document.getElementById("d19").value;
		}
		else {
		var d19 = 0;
		}

    if (document.getElementById('d20') != null) {
		var d20 = document.getElementById("d20").value;
		}
		else {
		var d20 = 0;
		}

    if (document.getElementById('d21') != null) {
		var d21 = document.getElementById("d21").value;
		}
		else {
		var d21 = 0;
		}

    if (document.getElementById('d22') != null) {
		var d22 = document.getElementById("d22").value;
		}
		else {
		var d22 = 0;
		}

    if (document.getElementById('d23') != null) {
		var d23 = document.getElementById("d23").value;
		}
		else {
		var d23 = 0;
		}

    if (document.getElementById('d24') != null) {
		var d24 = document.getElementById("d24").value;
		}
		else {
		var d24 = 0;
		}

    if (document.getElementById('d25') != null) {
		var d25 = document.getElementById("d25").value;
		}
		else {
		var d25 = 0;
		}

    if (document.getElementById('d26') != null) {
		var d26 = document.getElementById("d26").value;
		}
		else {
		var d26 = 0;
		}

    if (document.getElementById('d27') != null) {
		var d27 = document.getElementById("d27").value;
		}
		else {
		var d27 = 0;
		}

    if (document.getElementById('d28') != null) {
		var d28 = document.getElementById("d28").value;
		}
		else {
		var d28 = 0;
		}


    if (document.getElementById('d29') != null) {
		var d29 = document.getElementById("d29").value;
		}
		else {
		var d29 = 0;
		}

    if (document.getElementById('d30') != null) {
		var d30 = document.getElementById("d30").value;
		}
		else {
		var d30 = 0;
		}

    if (document.getElementById('d31') != null) {
		var d31 = document.getElementById("d31").value;
		}
		else {
		var d31 = 0;
		}

    if (document.getElementById('d32') != null) {
		var d32 = document.getElementById("d32").value;
		}
		else {
		var d32 = 0;
		}

    if (document.getElementById('d33') != null) {
		var d33 = document.getElementById("d33").value;
		}
		else {
		var d33 = 0;
		}

    if (document.getElementById('d34') != null) {
		var d34 = document.getElementById("d34").value;
		}
		else {
		var d34 = 0;
		}

    if (document.getElementById('d35') != null) {
		var d35 = document.getElementById("d35").value;
		}
		else {
		var d35 = 0;
		}

    if (document.getElementById('d36') != null) {
		var d36 = document.getElementById("d36").value;
		}
		else {
		var d36 = 0;
		}

    if (document.getElementById('d37') != null) {
		var d37 = document.getElementById("d37").value;
		}
		else {
		var d37 = 0;
		}

    if (document.getElementById('d38') != null) {
		var d38 = document.getElementById("d38").value;
		}
		else {
		var d38 = 0;
		}

    if (document.getElementById('d39') != null) {
		var d39 = document.getElementById("d39").value;
		}
		else {
		var d39 = 0;
		}

    if (document.getElementById('d40') != null) {
		var d40 = document.getElementById("d40").value;
		}
		else {
		var d40 = 0;
		}

    if (document.getElementById('d41') != null) {
		var d41 = document.getElementById("d41").value;
		}
		else {
		var d41 = 0;
		}

    if (document.getElementById('d42') != null) {
		var d42 = document.getElementById("d42").value;
		}
		else {
		var d42 = 0;
		}

    if (document.getElementById('d43') != null) {
		var d43 = document.getElementById("d43").value;
		}
		else {
		var d43 = 0;
		}

    if (document.getElementById('d44') != null) {
		var d44 = document.getElementById("d44").value;
		}
		else {
		var d44 = 0;
		}

    if (document.getElementById('d45') != null) {
		var d45 = document.getElementById("d45").value;
		}
		else {
		var d45 = 0;
		}

    if (document.getElementById('d46') != null) {
		var d46 = document.getElementById("d46").value;
		}
		else {
		var d46 = 0;
		}

    if (document.getElementById('d47') != null) {
		var d47 = document.getElementById("d47").value;
		}
		else {
		var d47 = 0;
		}

    if (document.getElementById('d48') != null) {
		var d48 = document.getElementById("d48").value;
		}
		else {
		var d48 = 0;
		}


		//These are 
    //the costs

    if (document.getElementById('c1') != null) {
		var c1 = document.getElementById("c1").value;
		}
		else {
		var c1 = 0;
		}

    if (document.getElementById('c2') != null) {
		var c2 = document.getElementById("c2").value;
		}
		else {
		var c2 = 0;
		}

    if (document.getElementById('c3') != null) {
		var c3 = document.getElementById("c3").value;
		}
		else {
		var c3 = 0;
		}

    if (document.getElementById('c4') != null) {
		var c4 = document.getElementById("c4").value;
		}
		else {
		var c4 = 0;
		}

    if (document.getElementById('c5') != null) {
		var c5 = document.getElementById("c5").value;
		}
		else {
		var c5 = 0;
		}

    if (document.getElementById('c6') != null) {
		var c6 = document.getElementById("c6").value;
		}
		else {
		var c6 = 0;
		}

    if (document.getElementById('c7') != null) {
		var c7 = document.getElementById("c7").value;
		}
		else {
		var c7 = 0;
		}

    if (document.getElementById('c8') != null) {
		var c8 = document.getElementById("c8").value;
		}
		else {
		var c8 = 0;
		}

    if (document.getElementById('c9') != null) {
		var c9 = document.getElementById("c9").value;
		}
		else {
		var c9 = 0;
		}

    if (document.getElementById('c10') != null) {
		var c10 = document.getElementById("c10").value;
		}
		else {
		var c10 = 0;
		}

    if (document.getElementById('c11') != null) {
		var c11 = document.getElementById("c11").value;
		}
		else {
		var c11 = 0;
		}

    if (document.getElementById('c12') != null) {
		var c12 = document.getElementById("c12").value;
		}
		else {
		var c12 = 0;
		}

    if (document.getElementById('c13') != null) {
		var c13 = document.getElementById("c13").value;
		}
		else {
		var c13 = 0;
		}

    if (document.getElementById('c14') != null) {
		var c14 = document.getElementById("c14").value;
		}
		else {
		var c14 = 0;
		}

    if (document.getElementById('c15') != null) {
		var c15 = document.getElementById("c15").value;
		}
		else {
		var c15 = 0;
		}

    if (document.getElementById('c16') != null) {
		var c16 = document.getElementById("c16").value;
		}
		else {
		var c16 = 0;
		}

    if (document.getElementById('c17') != null) {
		var c17 = document.getElementById("c17").value;
		}
		else {
		var c17 = 0;
		}

    if (document.getElementById('c18') != null) {
		var c18 = document.getElementById("c18").value;
		}
		else {
		var c18 = 0;
		}

    if (document.getElementById('c19') != null) {
		var c19 = document.getElementById("c19").value;
		}
		else {
		var c19 = 0;
		}

    if (document.getElementById('c20') != null) {
		var c20 = document.getElementById("c20").value;
		}
		else {
		var c20 = 0;
		}

    if (document.getElementById('c21') != null) {
		var c21 = document.getElementById("c21").value;
		}
		else {
		var c21 = 0;
		}

    if (document.getElementById('c22') != null) {
		var c22 = document.getElementById("c22").value;
		}
		else {
		var c22 = 0;
		}

    if (document.getElementById('c23') != null) {
		var c23 = document.getElementById("c23").value;
		}
		else {
		var c23 = 0;
		}

    if (document.getElementById('c24') != null) {
		var c24 = document.getElementById("c24").value;
		}
		else {
		var c24 = 0;
		}


    if (document.getElementById('c25') != null) {
		var c25 = document.getElementById("c25").value;
		}
		else {
		var c25 = 0;
		}

    if (document.getElementById('c26') != null) {
		var c26 = document.getElementById("c26").value;
		}
		else {
		var c26 = 0;
		}

    if (document.getElementById('c27') != null) {
		var c27 = document.getElementById("c27").value;
		}
		else {
		var c27 = 0;
		}

    if (document.getElementById('c28') != null) {
		var c28 = document.getElementById("c28").value;
		}
		else {
		var c28 = 0;
		}


    if (document.getElementById('c29') != null) {
		var c29 = document.getElementById("c29").value;
		}
		else {
		var c29 = 0;
		}

    if (document.getElementById('c30') != null) {
		var c30 = document.getElementById("c30").value;
		}
		else {
		var c30 = 0;
		}

    if (document.getElementById('c31') != null) {
		var c31 = document.getElementById("c31").value;
		}
		else {
		var c31 = 0;
		}

    if (document.getElementById('c32') != null) {
		var c32 = document.getElementById("c32").value;
		}
		else {
		var c32 = 0;
		}

    if (document.getElementById('c33') != null) {
		var c33 = document.getElementById("c33").value;
		}
		else {
		var c33 = 0;
		}

    if (document.getElementById('c34') != null) {
		var c34 = document.getElementById("c34").value;
		}
		else {
		var c34 = 0;
		}

    if (document.getElementById('c35') != null) {
		var c35 = document.getElementById("c35").value;
		}
		else {
		var c35 = 0;
		}

    if (document.getElementById('c36') != null) {
		var c36 = document.getElementById("c36").value;
		}
		else {
		var c36 = 0;
		}

    if (document.getElementById('c37') != null) {
		var c37 = document.getElementById("c37").value;
		}
		else {
		var c37 = 0;
		}

    if (document.getElementById('c38') != null) {
		var c38 = document.getElementById("c38").value;
		}
		else {
		var c38 = 0;
		}

    if (document.getElementById('c39') != null) {
		var c39 = document.getElementById("c39").value;
		}
		else {
		var c39 = 0;
		}

    if (document.getElementById('c40') != null) {
		var c40 = document.getElementById("c40").value;
		}
		else {
		var c40 = 0;
		}

    if (document.getElementById('c41') != null) {
		var c41 = document.getElementById("c41").value;
		}
		else {
		var c41 = 0;
		}

    if (document.getElementById('c42') != null) {
		var c42 = document.getElementById("c42").value;
		}
		else {
		var c42 = 0;
		}

    if (document.getElementById('c43') != null) {
		var c43 = document.getElementById("c43").value;
		}
		else {
		var c43 = 0;
		}

    if (document.getElementById('c44') != null) {
		var c44 = document.getElementById("c44").value;
		}
		else {
		var c44 = 0;
		}

    if (document.getElementById('c45') != null) {
		var c45 = document.getElementById("c45").value;
		}
		else {
		var c45 = 0;
		}

    if (document.getElementById('c46') != null) {
		var c46 = document.getElementById("c46").value;
		}
		else {
		var c46 = 0;
		}


    $("#conclusion").fadeIn( 300, "linear" );
 
		//Calculating the sum    
		resultp =  parseFloat(parseFloat(p1)+parseFloat(p2)+parseFloat(p3)+parseFloat(p4)+parseFloat(p5)+parseFloat(p6)+parseFloat(p7)+parseFloat(p8)+parseFloat(p9)+parseFloat(p10)+parseFloat(p11)+parseFloat(p12)+parseFloat(p13)+parseFloat(p14)+parseFloat(p15)+parseFloat(p16)+parseFloat(p17)+parseFloat(p18)+parseFloat(p19)+parseFloat(p20)+parseFloat(p21)+parseFloat(p22)+parseFloat(p23)+parseFloat(p24)+parseFloat(p25)+parseFloat(p26)+parseFloat(p27)+parseFloat(p28)+parseFloat(p29)+parseFloat(p30)+parseFloat(p31)+parseFloat(p32)+parseFloat(p33)+parseFloat(p34)+parseFloat(p35)+parseFloat(p36)+parseFloat(p37)+parseFloat(p38)+parseFloat(p39)+parseFloat(p40)+parseFloat(p41)+parseFloat(p42)+parseFloat(p43)+parseFloat(p44)+parseFloat(p45)+parseFloat(p46)) || 0; 
		resultd =  parseFloat(parseFloat(d1)+parseFloat(d2)+parseFloat(d3)+parseFloat(d4)+parseFloat(d5)+parseFloat(d6)+parseFloat(d7)+parseFloat(d8)+parseFloat(d9)+parseFloat(d10)+parseFloat(d11)+parseFloat(d12)+parseFloat(d13)+parseFloat(d14)+parseFloat(d15)+parseFloat(d16)+parseFloat(d17)+parseFloat(d18)+parseFloat(d19)+parseFloat(d20)+parseFloat(d21)+parseFloat(d22)+parseFloat(d23)+parseFloat(d24)+parseFloat(d25)+parseFloat(d26)+parseFloat(d27)+parseFloat(d28)+parseFloat(d29)+parseFloat(d30)+parseFloat(d31)+parseFloat(d32)+parseFloat(d33)+parseFloat(d34)+parseFloat(d35)+parseFloat(d36)+parseFloat(d37)+parseFloat(d38)+parseFloat(d39)+parseFloat(d40)+parseFloat(d41)+parseFloat(d42)+parseFloat(d43)+parseFloat(d44)+parseFloat(d45)+parseFloat(d46)) || 0; 
		resultc =  parseFloat(parseFloat(c1)+parseFloat(c2)+parseFloat(c3)+parseFloat(c4)+parseFloat(c5)+parseFloat(c6)+parseFloat(c7)+parseFloat(c8)+parseFloat(c9)+parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(c16)+parseFloat(c17)+parseFloat(c18)+parseFloat(c19)+parseFloat(c20)+parseFloat(c21)+parseFloat(c22)+parseFloat(c23)+parseFloat(c24)+parseFloat(c25)+parseFloat(c26)+parseFloat(c27)+parseFloat(c28)+parseFloat(c29)+parseFloat(c30)+parseFloat(c31)+parseFloat(c32)+parseFloat(c33)+parseFloat(c34)+parseFloat(c35)+parseFloat(c36)+parseFloat(c37)+parseFloat(c38)+parseFloat(c39)+parseFloat(c40)+parseFloat(c41)+parseFloat(c42)+parseFloat(c43)+parseFloat(c44)+parseFloat(c45)+parseFloat(c46)) || 0; 
		
		
		document.getElementById("conclusion-content").innerHTML = "<span class='heading'>Dear Client</span>, <br/> If you want UX for the project, it will take the hard work of <span class='conclusion'>" + resultp + " people</span>," +  " a full " +" <span class='conclusion'>" + resultd + " days</span> and it will cost a total of <span class='conclusion'>" + resultc + "</span>.";
}

