//add remove rows
$('input[value="Expert"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result1" class="result"> <td class="col-md-4"> <h6>Expert Review</h6> </td> <td> <input id="p1" name="p1" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="d1" name="d1" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="c1" name="c1" type="number" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c1]').val( +($('input[name=p1]').val()) *(+ $('input[name=d1]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result1').remove();
    }

});

$('input[value="Client"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result2" class="result2"> <td class="col-md-4"> <h6>Stakeholder Workshop</h6> </td> <td> <input name="p2" id="p2" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input name="d2"  id="d2" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  name="c2" id="c2" type="number" disabled  value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c2]').val( +($('input[name=p2]').val()) *(+ $('input[name=d2]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result2').remove();
    }

});

$('input[value="Competitor"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result3" class="result3"> <td class="col-md-4"> <h6>Competitor Analysis</h6> </td> <td> <input  name="p3" id="p3" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  name="d3" id="d3" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  name="c3" id="c3" type="number" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c3]').val( +($('input[name=p3]').val()) *(+ $('input[name=d3]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result3').remove();
    }

});

$('input[value="Requirements"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result4" class="result4"> <td class="col-md-4"> <h6>Requirements Analysis</h6> </td> <td> <input  name="p4" id="p4" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  name="d4" id="d4" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  name="c4" id="c4" type="number" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c4]').val( +($('input[name=p4]').val()) *(+ $('input[name=d4]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result4').remove();
    }

});





//add remove rows
$('input[value="SEO"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result5" class="result5"> <td class="col-md-4"> <h6>SEO & Analytics</h6> </td> <td> <input type="number"  name="p5" id="p5" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d5" id="d5" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" disabled name="c5" id="c5" value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c5]').val( +($('input[name=p5]').val()) *(+ $('input[name=d5]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result5').remove();
    }

});

$('input[value="Mobile"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result6" class="result6"> <td class="col-md-4"> <h6>Mobile Assesment</h6> </td> <td> <input type="number"  name="p6" id="p6" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="d6" id="d6" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" disabled name="c6" id="c6" value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c6]').val( +($('input[name=p6]').val()) *(+ $('input[name=d6]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result6').remove();
    }

});

$('input[value="Contextual"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result7" class="result7"> <td class="col-md-4"> <h6>Observational Research</h6> </td> <td> <input type="number"  name="p7" id="p7" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d7" id="d7" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" name="c7" id="c7" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c7]').val( +($('input[name=p7]').val()) *(+ $('input[name=d7]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result7').remove();
    }

});

$('input[value="Surveys"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result8" class="result8"> <td class="col-md-4"> <h6>Surveys</h6> </td> <td> <input type="number"  name="p8" id="p8" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d8" id="d8" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" disabled name="c8" id="c8" value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c8]').val( +($('input[name=p8]').val()) *(+ $('input[name=d8]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result8').remove();
    }

});



//add remove rows
$('input[value="Personas"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result9" class="result9"> <td class="col-md-4"> <h6>Persona</h6> </td> <td> <input type="number"  name="p9" id="p9" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d9"  id="d9" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c9" id="c9" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c9]').val( +($('input[name=p9]').val()) *(+ $('input[name=d9]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result9').remove();
    }

});

$('input[value="User"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result10" class="result10"> <td class="col-md-4"> <h6>User Flow</h6> </td> <td> <input type="number"  name="p10" id="p10" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d10"  id="d10" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c10" id="c10" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c10]').val( +($('input[name=p10]').val()) *(+ $('input[name=d10]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result10').remove();
    }

});

$('input[value="Storyboards"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result11" class="result11"> <td class="col-md-4"> <h6>Storyboards</h6> </td> <td> <input type="number" id="p11"  name="p11"  value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d11"  id="d11" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c11" id="c11" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c11]').val( +($('input[name=p11]').val()) *(+ $('input[name=d11]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result11').remove();
    }

});

$('input[value="Journey"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result12" class="result12"> <td class="col-md-4"> <h6>Journey Maps</h6> </td> <td> <input type="number"  name="p12" id="p12" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d12"   id="d12" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c12" id="c12" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c12]').val( +($('input[name=p12]').val()) *(+ $('input[name=d12]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result12').remove();
    }

});







//add remove rows
$('input[value="Sitemap"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result13" class="result13"> <td class="col-md-4"> <h6>Sitemap</h6> </td> <td> <input type="number"  name="p13" id="p13" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d13"   id="d13" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c13"  id="c13" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c13]').val( +($('input[name=p13]').val()) *(+ $('input[name=d13]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result13').remove();
    }

});

$('input[value="Card Sorting"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result14" class="result14"> <td class="col-md-4"> <h6>Card Sorting</h6> </td> <td> <input type="number"  name="p14" id="p14" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d14"  id="d14" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c14" id="c14" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c14]').val( +($('input[name=p14]').val()) *(+ $('input[name=d14]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result14').remove();
    }

});

$('input[value="IA"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result15" class="result15"> <td class="col-md-4"> <h6>IA</h6> </td> <td> <input type="number"  name="p15" id="p15" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d15"   id="d15" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c15" id="c15" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c15]').val( +($('input[name=p15]').val()) *(+ $('input[name=d15]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result15').remove();
    }

});

$('input[value="Sketching"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result16" class="result16"> <td class="col-md-4"> <h6>Sketching</h6> </td> <td> <input type="number" id="p16"  name="p16" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"   name="d16"  id="d16" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c16" id="c16" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c16]').val( +($('input[name=p16]').val()) *(+ $('input[name=d16]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result16').remove();
    }

});






//add remove rows
$('input[value="Wireframes"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result17" class="result17"> <td class="col-md-4"> <h6>Wireframes</h6> </td> <td> <input type="number" id="p17"  name="p17"  value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d17"   id="d17" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c17" id="c17" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c17]').val( +($('input[name=p17]').val()) *(+ $('input[name=d17]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result17').remove();
    }

});

$('input[value="Styleguide"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result18" class="result18"> <td class="col-md-4"> <h6>Styleguide</h6> </td> <td> <input type="number" id="p18"  name="p18" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d18"  name="d18" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c18"  name="c18" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c18]').val( +($('input[name=p18]').val()) *(+ $('input[name=d18]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result18').remove();
    }

});

$('input[value="Mockups"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result19" class="result19"> <td class="col-md-4"> <h6>Mockups</h6> </td> <td> <input type="number" id="p19"  name="p19" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d19"  id="d19" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c19" id="c19" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c19]').val( +($('input[name=p19]').val()) *(+ $('input[name=d19]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result19').remove();
    }

});

$('input[value="Prototyping"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result20" class="result20"> <td class="col-md-4"> <h6>Prototyping</h6> </td> <td> <input type="number" id="p20"  name="p20" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d20"   id="d20" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c20" id="c20" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c20]').val( +($('input[name=p20]').val()) *(+ $('input[name=d20]').val()) );
        });
        //END ONBLUR    
    } else {
        $('#result20').remove();
    }

});



//add remove rows
$('input[value="AB"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result21" class="result21"> <td class="col-md-4"> <h6>A/B Testing</h6> </td> <td> <input type="number"  name="p21"  id="p21" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d21"   id="d21" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c21" id="c21" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c21]').val( +($('input[name=p21]').val()) *(+ $('input[name=d21]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result21').remove();
    }

});

$('input[value="Guerilla"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result22" class="result22"> <td class="col-md-4"> <h6>Guerilla Testing</h6> </td> <td> <input type="number"  name="p22" id="p22" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d22"  id="d22" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="c22" id="c22" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c22]').val( +($('input[name=p22]').val()) *(+ $('input[name=d22]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result22').remove();
    }

});

$('input[value="Lab"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result23" class="result23"> <td class="col-md-4"> <h6>Lab Testing</h6> </td> <td> <input type="number"  name="p23" id="p23" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"    name="d23" id="d23" value="0" class="col-md-2 form-control"> </td> <td> <input type="number" id="c23"  name="c23" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c23]').val( +($('input[name=p23]').val()) *(+ $('input[name=d23]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result23').remove();
    }

});

$('input[value="Remote"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result24" class="result24"> <td class="col-md-4"> <h6>Remote Testing</h6> </td> <td> <input type="number"  name="p24" id="p24" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d24"  id="d24" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c24" id="c24" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c24]').val( +($('input[name=p24]').val()) *(+ $('input[name=d24]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result24').remove();
    }

});


$('input[value="Paper"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result25" class="result25"> <td class="col-md-4"> <h6>Paper Prototyping</h6> </td> <td> <input type="number" id="p25"  name="p25" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d25"  id="d25" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c25"  name="c25" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c25]').val( +($('input[name=p25]').val()) *(+ $('input[name=d25]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result25').remove();
    }

});

$('input[value="HTML"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result26" class="result26"> <td class="col-md-4"> <h6>HTML Demo</h6> </td> <td> <input type="number" id="p26"  name="p26" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d26"  id="d26" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c26" id="c26" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c26]').val( +($('input[name=p26]').val()) *(+ $('input[name=d26]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result26').remove();
    }

});

$('input[value="Interactive"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result27" class="result27"> <td class="col-md-4"> <h6>IXD Prototyping</h6> </td> <td> <input type="number"  name="p27" id="p27" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d27"  id="d27" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" name="c27"  id="c27" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c27]').val( +($('input[name=p27]').val()) *(+ $('input[name=d27]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result27').remove();
    }

});

$('input[value="Showcase"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result28" class="result28"> <td class="col-md-4"> <h6>Mobile Showcase</h6> </td> <td> <input type="number"  name="p28" id="p28" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d28"  id="d28" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c28" id="c28" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c28]').val( +($('input[name=p28]').val()) *(+ $('input[name=d28]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result28').remove();
    }

});



//
//The new ones
$('input[value="Interview"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result29" class="result29"> <td class="col-md-4"> <h6>Stakeholder Interview</h6> </td> <td> <input type="number"  name="p29" id="p29" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d29"  id="d29" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c29" id="c29" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c29]').val( +($('input[name=p29]').val()) *(+ $('input[name=d29]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result29').remove();
    }

});

$('input[value="Debriefing"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result30" class="result30"> <td class="col-md-4"> <h6>Debriefing</h6> </td> <td> <input type="number"  name="p30" id="p30" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d30"  name="d30" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c30"  name="c30" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c30]').val( +($('input[name=p30]').val()) *(+ $('input[name=d30]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result30').remove();
    }

});

$('input[value="Ethnographic"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result31" class="result31"> <td class="col-md-4"> <h6>Ethnographic Research</h6> </td> <td> <input type="number"  name="p31"  id="p31" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d31"  id="d31" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c31" id="c31" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c31]').val( +($('input[name=p31]').val()) *(+ $('input[name=d31]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result31').remove();
    }

});

$('input[value="Market"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result32" class="result32"> <td class="col-md-4"> <h6>Market Research</h6> </td> <td> <input type="number" id="p32"  name="p32" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d32"  id="d32" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c32" value="0"  name="c32" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c32]').val( +($('input[name=p32]').val()) *(+ $('input[name=d32]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result32').remove();
    }

});



$('input[value="Photo"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result33" class="result33"> <td class="col-md-4"> <h6>Photo Ethnography</h6> </td> <td> <input type="number"  name="p33" id="p33" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d33"  id="d33" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c33" id="c33" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c33]').val( +($('input[name=p33]').val()) *(+ $('input[name=d33]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result33').remove();
    }

});

$('input[value="Anthropology"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result34" class="result34"> <td class="col-md-4"> <h6>Visual Anthropology</h6> </td> <td> <input type="number" id="p34"  name="p34" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d34"  name="d34" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c34"  name="c34" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c34]').val( +($('input[name=p34]').val()) *(+ $('input[name=d34]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result34').remove();
    }

});

$('input[value="Demographics"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result35" class="result35"> <td class="col-md-4"> <h6>Demographics</h6> </td> <td> <input type="number"  name="p35" id="p35" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d35"  id="d35" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c35" id="c35" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c35]').val( +($('input[name=p35]').val()) *(+ $('input[name=d35]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result35').remove();
    }

});

$('input[value="Focus"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result36" class="result36"> <td class="col-md-4"> <h6>Focus Groups</h6> </td> <td> <input type="number" id="p36"  name="p36" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d36"  id="d36" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c36" value="0"  name="c36" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c36]').val( +($('input[name=p36]').val()) *(+ $('input[name=d36]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result36').remove();
    }

});


$('input[value="Psychographics"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result37" class="result37"> <td class="col-md-4"> <h6>Psychographics</h6> </td> <td> <input type="number" id="p37"  name="p37" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d37"  id="d37" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c37"  name="c37" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c37]').val( +($('input[name=p37]').val()) *(+ $('input[name=d37]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result37').remove();
    }

});

$('input[value="Documentation"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result38" class="result38"> <td class="col-md-4"> <h6>Documentation</h6> </td> <td> <input type="number" id="p38"  name="p38" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d38"  id="d38" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c38"  name="c38" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c38]').val( +($('input[name=p38]').val()) *(+ $('input[name=d38]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result38').remove();
    }

});

$('input[value="Stories"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result39" class="result39"> <td class="col-md-4"> <h6>User Stories</h6> </td> <td> <input type="number" id="p39"  name="p39" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d39"  id="d39" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c39" id="c39" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c39]').val( +($('input[name=p39]').val()) *(+ $('input[name=d39]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result39').remove();
    }

});

$('input[value="Acceptance"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result40" class="result40"> <td class="col-md-4"> <h6>Acceptance Criteria</h6> </td> <td> <input type="number"  name="p40" id="p40" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d40"  id="d40" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c40" id="c40" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c40]').val( +($('input[name=p40]').val()) *(+ $('input[name=d40]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result40').remove();
    }

});

$('input[value="QOC"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result41" class="result41"> <td class="col-md-4"> <h6>Questions, Options, Criteria</h6> </td> <td> <input type="number" id="p41"  name="p41" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d41"  id="d41" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c41" value="0"  name="c41" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c41]').val( +($('input[name=p41]').val()) *(+ $('input[name=d41]').val()) );
        });
        //END ONBLUR
    } else { 
        $('#result41').remove();
    }

});

$('input[value="Audit"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result42" class="result42"> <td class="col-md-4"> <h6>Content Audit</h6> </td> <td> <input type="number" id="p42"  name="p42" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d42"   id="d42" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c42" id="c42" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c42]').val( +($('input[name=p42]').val()) *(+ $('input[name=d42]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result42').remove();
    }

});


$('input[value="Inventory"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result43" class="result43"> <td class="col-md-4"> <h6>Content Inventory</h6> </td> <td> <input type="number"  name="p43" id="p43" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d43"   id="d43" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c43"  name="c43" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c43]').val( +($('input[name=p43]').val()) *(+ $('input[name=d43]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result43').remove();
    }

});

$('input[value="Brainstorming"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result44" class="result44"> <td class="col-md-4"> <h6>Brainstorming</h6> </td> <td> <input type="number" id="p44"  name="p44" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d44"  name="d44" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c44"  name="c44" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c44]').val( +($('input[name=p44]').val()) *(+ $('input[name=d44]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result44').remove();
    }

});


$('input[value="OrgSchemes"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result45" class="result45"> <td class="col-md-4"> <h6>Organisation Schemes</h6> </td> <td> <input type="number" id="p45"  name="p45" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"  name="d45"   id="d45" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c45"  name="c45"  value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c45]').val( +($('input[name=p45]').val()) *(+ $('input[name=d45]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result45').remove();
    }

});

$('input[value="OrgStructure"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result46" class="result46"> <td class="col-md-4"> <h6>Organisation Structure</h6> </td> <td> <input type="number" id="p46"  name="p46" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d46"  name="d46" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c46"  name="c46" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c46]').val( +($('input[name=p46]').val()) *(+ $('input[name=d46]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result46').remove();
    }

});


$('input[value="DoGo"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result47" class="result47"> <td class="col-md-4"> <h6>DoGo Mapping</h6> </td> <td> <input type="number" id="p47"  name="p47" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   name="d47"  id="d47" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number"  name="c47" id="c47" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c47]').val( +($('input[name=p47]').val()) *(+ $('input[name=d47]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result47').remove();
    }

});


$('input[value="Tiles"]').change(function () {

    if ($(this).prop('checked')) { 
        $("#summary-table").append('<tr id="result48" class="result48"> <td class="col-md-4"> <h6>Style Tiles</h6> </td> <td> <input type="number" id="p48"  name="p48" value="0" class="col-md-2 form-control"> </td> <td> <input type="number"   id="d48"  name="d48" value="0"  class="col-md-2 form-control"> </td> <td> <input type="number" id="c48"  name="c48" value="0" disabled class="col-md-4 form-control"> </td> </tr>');
        //START ONBLUR
        $('input').blur(function(){
        $('input[name=c48]').val( +($('input[name=p48]').val()) *(+ $('input[name=d48]').val()) );
        });
        //END ONBLUR
    } else {
        $('#result48').remove();
    }

});


// Reset/Uncheck the options

 function uncheckem() 
{
    $('input:checkbox').removeAttr('checked');
    $('#result1').remove();
    $('#result2').remove();
    $('#result3').remove();
    $('#result4').remove();
    $('#result5').remove();
    $('#result6').remove();
    $('#result7').remove();
    $('#result8').remove();
    $('#result9').remove();
    $('#result10').remove();
    $('#result11').remove();
    $('#result12').remove();
    $('#result13').remove();
    $('#result14').remove();
    $('#result15').remove();
    $('#result16').remove();
    $('#result17').remove();
    $('#result18').remove();
    $('#result19').remove();
    $('#result20').remove();
    $('#result21').remove();
    $('#result22').remove();
    $('#result23').remove();
    $('#result24').remove();
    $('#result25').remove();
    $('#result26').remove();
    $('#result27').remove();
    $('#result28').remove();
    $('#result29').remove();
    $('#result30').remove();
    $('#result31').remove();
    $('#result32').remove();
    $('#result33').remove();
    $('#result34').remove();
    $('#result35').remove();
    $('#result36').remove();
    $('#result37').remove();
    $('#result38').remove();
    $('#result39').remove();
    $('#result40').remove();
    $('#result41').remove();
    $('#result42').remove();
    $('#result43').remove();
    $('#result44').remove();
    $('#result45').remove();
    $('#result46').remove();
    $('#result47').remove();
    $('#result48').remove();
    $('#conclusion').hide();
    
        
}