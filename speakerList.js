$(document).ready(function() {
    
    $('#speakerList').DataTable( {
        "ajax": 'speakers.json',
        "order": [[0, "asc"]],
        "LengthMenu": [25, 50, 100],
        "pageLength": 25,
        "columnDefs": [
                {
                    "render": function (data, type, row) {
                        
                        var link = convertToLink(data);
                        
                        return link;
                        
                    },
                    "targets": 1
                }
            ]
    } );
    
} );

function convertToLink(link) {
    
    var html = '<a target="_blank" href=https://twitter.com/' + link + '>' + link + "</a>";
    
    return html;
    
}
