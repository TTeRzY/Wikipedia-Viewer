$(document).ready(function(){
    $("#form").submit(function(){

    });

    $('#search-btn').click(function(){
        var getInput = $('#search');
        var message = $("#show-content");
        var apiUrl = "https://en.wikipedia.org/w/api.php?";

        $.ajax({
            type: "POST",
            url: apiUrl,
            data: {
                action: 'query',
                list: 'search',
                srsearch: getInput.val(),
                format: 'json'
            },
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var result = [];
                var info = [];

                data.query.search.map(function(f){
                    console.log(f);
                    var title = f.title;
                    var linkItem = "https://en.wikipedia.org/wiki/";
                    info.push(f.snippet);
                    for(var i =0; i < info.length; i++){
                        if(!result[i])
                            result.push("<li><br/>" + title + "<br/><br/>" + info[i] + "<br/><br/></li>" + "<a target=\"_blank\" href=\">" + linkItem  + title + "\"" +"</a>");
                    }
                    message.html(result);
                });
            },
            error: function (errorMessage) {
            }


        });
    });

});