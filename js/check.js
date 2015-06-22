
$('input').change(function () {
    if ($(this).prop('checked')) {
        var iCountRes = $('.result').length;
        $(this).attr('data-id', 'result' + iCountRes);
        $("#summary-table").append(createRow($(this).parent().find('.labelauty-checked .labelautyLabel').html(), iCountRes));
        //START ONBLUR
        $('input').blur(function () {
            $('input[name=c' + iCountRes + ']').val(+($('input[name=p' + iCountRes + ']').val()) * (+$('input[name=d' + iCountRes + ']').val()));
        });
        //END ONBLUR
    } else {
        $('#' + $(this).attr('data-id')).remove();
        $(this).removeAttr('data-id');
    }
});

function createRow(text, count) {
    var data = '<tr id="result' + count + '" class="result">' +
            '<td class="col-md-4"> <h6>' + text + '</h6> ' +
            '</td> <td> ' +
            '<input id="p' + count + '" name="p' + count + '" type="number"  value="0" class="col-md-2 form-control"> ' +
            '</td> <td> ' +
            '<input  id="d' + count + '" name="d' + count + '" type="number"  value="0" class="col-md-2 form-control"> ' +
            '</td> <td> ' +
            '<input  id="c' + count + '" name="c' + count + '" type="number" disabled value="0" class="col-md-4 form-control"> ' +
            '</td> </tr>';
    return data;
}

function uncheckem() {
    $('input:checkbox').removeAttr('checked');
    $('#conclusion').hide();
    $("#summary-table").html('');
}
