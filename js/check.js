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