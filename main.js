$(document).ready(() =>
{
    
    $('h2').click(function()
    {
        $(event.currentTarget).next('.As').slideToggle();
    });
});