$(document).ready(function(){
    $("#search-btn").click(function(){
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            data: {action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json' },
            dataType: 'json',
            success: takeResults
        });
    });
});

function takeResults(data){
    for(var i = 0; i < data.query.search.length; i++){
        console.log(data[i]);
    }
}