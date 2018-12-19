function renderTable(data){
    var html = '';
    //loop for generate table data
    $.each( data, function( key, val ) {
        html += '<tr>'
            + '<td>'+val.firstname+'</td>'
            + '<td>'+val.lastname+'</td>'
            + '<td>'+val.hour+'</td>'
            + '<td>'+calculateSalary(val.hour)+'</td>'
        + '</tr>';
    });

    content.html(html);
}