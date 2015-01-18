
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
// $(document).ready(function(){
//     $('input[type="checkbox"]').click(function(){
//         if($(this).attr("value")=="Expert"){
//             $(".result").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Client"){
//             $(".result2").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Competitor"){
//             $(".result3").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Requirements"){
//             $(".result4").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="SEO"){
//             $(".result5").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Mobile"){
//             $(".result6").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Contextual"){
//             $(".result7").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Surveys"){
//             $(".result8").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Personas"){
//             $(".result9").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="User"){
//             $(".result10").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Storyboards"){
//             $(".result11").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Journey"){
//             $(".result12").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Sitemap"){
//             $(".result13").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Card Sorting"){
//             $(".result14").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="IA"){
//             $(".result15").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Sketching"){
//             $(".result16").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Wireframes"){
//             $(".result17").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Styleguide"){
//             $(".result18").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Mockups"){
//             $(".result19").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Prototyping"){
//             $(".result20").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="AB"){
//             $(".result21").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Guerilla"){
//             $(".result22").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Lab"){
//             $(".result23").fadeToggle( 300, "linear" );
//         }
//         if($(this).attr("value")=="Remote"){
//             $(".result24").fadeToggle( 300, "linear" );
//         }
//     });
// });


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
        $("#summary-table").append('<tr id="result2" class="result2"> <td class="col-md-4"> <h6>Client Workshop</h6> </td> <td> <input  id="p2" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="d2" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="c2" type="number"  value="0" class="col-md-4 form-control"> </td> </tr>');

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
        $("#summary-table").append('<tr id="result7" class="result7"> <td class="col-md-4"> <h6>Contextual Research</h6> </td> <td> <input type="number"  id="p7" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="d7" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  id="c7" value="0" class="col-md-4 form-control"> </td> </tr>');
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
        $("#summary-table").append('<tr id="result9" class="result9"> <td class="col-md-4"> <h6>Personas</h6> </td> <td> <input type="number" id="p9" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d9" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c9" value="0" class="col-md-4 form-control"> </td> </tr>');
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
        $("#summary-table").append('<tr class="id="result13" result13"> <td class="col-md-4"> <h6>Sitemap</h6> </td> <td> <input type="number" id="p13" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d13" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c13" value="0" class="col-md-4 form-control"> </td> </tr>');
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

 
		//Calculating the sum    
		resultp =  parseFloat(parseFloat(p1)+parseFloat(p2)+parseFloat(p3)+parseFloat(p4)+parseFloat(p5)+parseFloat(p6)+parseFloat(p7)+parseFloat(p8)+parseFloat(p9)+parseFloat(p10)+parseFloat(p11)+parseFloat(p12)+parseFloat(p13)+parseFloat(p14)+parseFloat(p15)+parseFloat(p16)+parseFloat(p17)+parseFloat(p18)+parseFloat(p19)+parseFloat(p20)+parseFloat(p21)+parseFloat(p22)+parseFloat(p23)+parseFloat(p24)) || 0; 
		resultd =  parseFloat(parseFloat(d1)+parseFloat(d2)+parseFloat(d3)+parseFloat(d4)+parseFloat(d5)+parseFloat(d6)+parseFloat(d7)+parseFloat(d8)+parseFloat(d9)+parseFloat(d10)+parseFloat(d11)+parseFloat(d12)+parseFloat(d13)+parseFloat(d14)+parseFloat(d15)+parseFloat(d16)+parseFloat(d17)+parseFloat(d18)+parseFloat(d19)+parseFloat(d20)+parseFloat(d21)+parseFloat(d22)+parseFloat(d23)+parseFloat(d24)) || 0; 
		resultc =  parseFloat(parseFloat(c1)+parseFloat(c2)+parseFloat(c3)+parseFloat(c4)+parseFloat(c5)+parseFloat(c6)+parseFloat(c7)+parseFloat(c8)+parseFloat(c9)+parseFloat(c10)+parseFloat(c11)+parseFloat(c12)+parseFloat(c13)+parseFloat(c14)+parseFloat(c15)+parseFloat(c16)+parseFloat(c17)+parseFloat(c18)+parseFloat(c19)+parseFloat(c20)+parseFloat(c21)+parseFloat(c22)+parseFloat(c23)+parseFloat(c24)) || 0; 
		
		
		document.getElementById("conclusion").innerHTML = "You will need " + resultp + " people, " + resultd + " days and it will cost " + resultc + " total in cash.";
}




