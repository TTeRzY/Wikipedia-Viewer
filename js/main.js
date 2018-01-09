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
                var result = [];
                var info = [];

                data.query.search.map(function(f){
                    var title = f.title.split(' ').join('_');
                    var linkItem = 'https://en.wikipedia.org/wiki/' + title;
                    info.push(f.snippet);
                    for(var i =0; i < info.length; i++){
                        if(!result[i])
                            result.push("<li><h3>" + title + "</h3><br><br>" + info[i]  + "<br><br> <a class='btn btn-info' href="+linkItem+">Learn more</a>" + "</li>");
                    }
                    message.html(result);


                });
            },
            error: function (errorMessage) {
            }


        });
    });

});