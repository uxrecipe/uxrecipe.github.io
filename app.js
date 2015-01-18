
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
        $("#summary-table").append('<tr id="result5" class="result5"> <td class="col-md-4"> <h6>SEO & Analytics</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result5').remove();
    }

});

$('input[value="Mobile"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result6" class="result6"> <td class="col-md-4"> <h6>Mobile Assesment</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result6').remove();
    }

});

$('input[value="Contextual"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result7" class="result7"> <td class="col-md-4"> <h6>Contextual Research</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result7').remove();
    }

});

$('input[value="Surveys"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result8" class="result8"> <td class="col-md-4"> <h6>Surveys</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result8').remove();
    }

});






//add remove rows
$('input[value="Personas"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result9" class="result9"> <td class="col-md-4"> <h6>Personas</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result9').remove();
    }

});

$('input[value="User"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result10" class="result10"> <td class="col-md-4"> <h6>User Flow</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result10').remove();
    }

});

$('input[value="Storyboards"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result11" class="result11"> <td class="col-md-4"> <h6>Storyboards</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result11').remove();
    }

});

$('input[value="Journey"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result12" class="result12"> <td class="col-md-4"> <h6>Journey Maps</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result12').remove();
    }

});







//add remove rows
$('input[value="Sitemap"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr class="id="result13" result13"> <td class="col-md-4"> <h6>Sitemap</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result13').remove();
    }

});

$('input[value="Card Sorting"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result14" class="result14"> <td class="col-md-4"> <h6>Card Sorting</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result14').remove();
    }

});

$('input[value="IA"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result15" class="result15"> <td class="col-md-4"> <h6>IA</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result15').remove();
    }

});

$('input[value="Sketching"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result16" class="result16"> <td class="col-md-4"> <h6>Sketching</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result16').remove();
    }

});






//add remove rows
$('input[value="Wireframes"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result17" class="result17"> <td class="col-md-4"> <h6>Wireframes</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result17').remove();
    }

});

$('input[value="Styleguide"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result18" class="result18"> <td class="col-md-4"> <h6>Styleguide</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result18').remove();
    }

});

$('input[value="Mockups"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result19" class="result19"> <td class="col-md-4"> <h6>Mockups</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result19').remove();
    }

});

$('input[value="Prototyping"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result20" class="result20"> <td class="col-md-4"> <h6>Prototyping</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');
    } else {
        $('#result20').remove();
    }

});



//add remove rows
$('input[value="AB"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result21" class="result21"> <td class="col-md-4"> <h6>A/B Testing</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result21').remove();
    }

});

$('input[value="Guerilla"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result22" class="result22"> <td class="col-md-4"> <h6>Guerilla Testing</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result22').remove();
    }

});

$('input[value="Lab"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result23" class="result23"> <td class="col-md-4"> <h6>Lab Testing</h6> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-2 form-control"> </td> <td> <input type="number" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result23').remove();
    }

});

$('input[value="Remote"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result24" class="result24"> <td class="col-md-4"> <h6>Remote Testing</h6> </td> <td> <input type="number" id="n1" value="" class="col-md-2 form-control"> </td> <td> <input type="number" id="n2" value="" class="col-md-2 form-control"> </td> <td> <input type="number" id="n3" value="" class="col-md-4 form-control"> </td> </tr>');

    } else {
        $('#result24').remove();
    }

});





//calculate the sum  // PDC
 function sum() 
{ 
		var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23;
		var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23;
		var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23;
    
    p1 = document.getElementById("p1").value || 0; 
    p2 = document.getElementById("p2").value || 0; 
    p3 = document.getElementById("p3").value || 0; 
    p4 = document.getElementById("p4").value || 0; 
    // p5 = document.getElementById("p5").value || 0; 
    // p6 = document.getElementById("p6").value || 0; 
    // p7 = document.getElementById("p7").value || 0; 
    // p8 = document.getElementById("p8").value || 0; 
    // p9 = document.getElementById("p9").value || 0; 
    // p10 = document.getElementById("p10").value || 0; 
    // p11 = document.getElementById("p11").value || 0; 
    // p12 = document.getElementById("p12").value || 0; 
    // p13 = document.getElementById("p13").value || 0; 
    // p14 = document.getElementById("p14").value || 0; 
    // p15 = document.getElementById("p15").value || 0; 
    // p16 = document.getElementById("p16").value || 0; 
    // p17 = document.getElementById("p17").value || 0; 
    // p18 = document.getElementById("p18").value || 0; 
    // p19 = document.getElementById("p19").value || 0; 
    // p20 = document.getElementById("p20").value || 0; 
    // p21 = document.getElementById("p21").value || 0; 
    // p22 = document.getElementById("p22").value || 0; 
    // p23 = document.getElementById("p23").value || 0; 
    // p24 = document.getElementById("p24").value || 0; 

    d1 = document.getElementById("d1").value || 0; 
    d2 = document.getElementById("d2").value || 0; 
    d3 = document.getElementById("d3").value || 0; 
    d4 = document.getElementById("d4").value || 0; 
    // d5 = document.getElementById("d5").value || 0; 
    // d6 = document.getElementById("d6").value || 0; 
    // d7 = document.getElementById("d7").value || 0; 
    // d8 = document.getElementById("d8").value || 0; 
    // d9 = document.getElementById("d9").value || 0; 
    // d10 = document.getElementById("d10").value || 0; 
    // d11 = document.getElementById("d11").value || 0; 
    // d12 = document.getElementById("d12").value || 0; 
    // d13 = document.getElementById("d13").value || 0; 
    // d14 = document.getElementById("d14").value || 0; 
    // d15 = document.getElementById("d15").value || 0; 
    // d16 = document.getElementById("d16").value || 0; 
    // d17 = document.getElementById("d17").value || 0; 
    // d18 = document.getElementById("d18").value || 0; 
    // d19 = document.getElementById("d19").value || 0; 
    // d20 = document.getElementById("d20").value || 0; 
    // d21 = document.getElementById("d21").value || 0; 
    // d22 = document.getElementById("d22").value || 0; 
    // d23 = document.getElementById("d23").value || 0; 
    // d24 = document.getElementById("d24").value || 0; 

    c1 = document.getElementById("c1").value || 0; 
    c2 = document.getElementById("c2").value || 0; 
    c3 = document.getElementById("c3").value || 0; 
    c4 = document.getElementById("c4").value || 0; 

    // c5 = document.getElementById("c5").value || 0; 
    // c6 = document.getElementById("c6").value || 0; 
    // c7 = document.getElementById("c7").value || 0; 
    // c8 = document.getElementById("c8").value || 0; 
    // c9 = document.getElementById("c9").value || 0; 
    // c10 = document.getElementById("c10").value || 0; 
    // c11 = document.getElementById("c11").value || 0; 
    // c12 = document.getElementById("c12").value || 0; 
    // c13 = document.getElementById("c13").value || 0; 
    // c14 = document.getElementById("c14").value || 0; 
    // c15 = document.getElementById("c15").value || 0; 
    // c16 = document.getElementById("c16").value || 0; 
    // c17 = document.getElementById("c17").value || 0; 
    // c18 = document.getElementById("c18").value || 0; 
    // c19 = document.getElementById("c19").value || 0; 
    // c20 = document.getElementById("c20").value || 0; 
    // c21 = document.getElementById("c21").value || 0; 
    // c22 = document.getElementById("c22").value || 0; 
    // c23 = document.getElementById("c23").value || 0; 
    // c24 = document.getElementById("c24").value || 0; 
    
		resultp =  parseFloat(parseFloat(p1)+parseFloat(p2)+parseFloat(p3)+parseFloat(p4)) || 0; 
		resultd =  parseFloat(parseFloat(d1)+parseFloat(d2)+parseFloat(d3)+parseFloat(d4)) || 0; 
		resultc =  parseFloat(parseFloat(c1)+parseFloat(c2)+parseFloat(c3)+parseFloat(c4)) || 0; 
		
		document.getElementById("conclusion").innerHTML = "You will need " + resultp + " people, " + resultd + " days and it will cost " + resultc + " total cash.";
}




