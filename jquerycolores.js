$(document).ready(function() {

    $("#orderedlist").addClass("blue");
    $("#orderedlist").addClass("red");
    $('#orderedlist li:last').hover(function(event){
        $(this).toggleClass('green');
    });
});

