$(document).ready(function()
{

    $('#login').ajaxForm(function(x1) {
        if (x1=="OK")
        {
            location.href="/good"
        }

    });

     $('#register').ajaxForm(function(x1) {
        if (x1=="OK")
        {
            location.href="/spasibo"
        }
    });

});