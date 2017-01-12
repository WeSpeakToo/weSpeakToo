$(document).ready(function() {
    
    $('#DCspeakerList').DataTable( {
        "ajax": './DC/speakers.json',
        "order": [[0, "asc"]],
        "lengthMenu": [10, 25, 50, 75, 100],
        "columnDefs": [
                {
                    "render": function (data, type, row) {
                        return "<a target='_blank' href=https://twitter.com/" + row[1] + ">" + row[1] + "</a>";
                        
                    },
                    "targets": 1
                },
                {
                "render": function ( data, type, row ) {
                    return "<a target='_blank' href='" + row[4]+"'>"+row[0]+"</a>";
                },
                    "targets": 0
                },
                { 
                    "visible": false,  "targets": 4 }
            ]
    } );
    
} );

$(document).ready(function() {
    
    $('#AustinSpeakerList').DataTable( {
        "ajax": './austin/speakers.json',
        "order": [[0, "asc"]],
        "lengthMenu": [10, 25, 50, 75, 100],
        "columnDefs": [
                {
                    "render": function (data, type, row) {
                        
                        var link = convertToLink(data);
                        
                        return link;
                        
                    },
                    "targets": 1
                },
                {
                "render": function ( data, type, row ) {
                    return "<a target='_blank' href='" + row[4]+"'>"+row[0]+"</a>";
                },
                    "targets": 0
                },
                { 
                    "visible": false,  "targets": 4 }
            ]
    } );
    
} );

function convertToLink(link) {
    
    var html = '<a target="_blank" href=https://twitter.com/' + link + '>' + link + "</a>";
    
    return html;
    
}
