$(document).ready(function(){
    $("#form").submit(function(){

    });

    $('#search-btn').click(function(){
        var getInput = $('#search');
        var message = $("#show-content");
        var apiUrl = "https://en.wikipedia.org/w/api.php?&callback=?";

        $.ajax({
            type: "GET",
            url: apiUrl,
            data: {
                action: 'query',
                list: 'search',
                srsearch: getInput.val(),
                format: 'json'
            },
            dataType: "jsonp",
            success: function (data) {
                var result = [];
                var info = [];
                data.query.search.map(function(f){
                    info.push(f.snippet);
                    for(var i =0; i < info.length; i++){
                        if(!result[i])
                            result.push("<br/><br/>" + info[i] + "<br/><br/>");
                    }
                    message.html(result);
                });
            },
            error: function (errorMessage) {
            }


        });
    });

});