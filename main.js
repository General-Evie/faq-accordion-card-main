$(document).ready(() =>
{
    
    $('h2').click(function()
    {
        $(event.currentTarget).next('.As').slideToggle();
        $(event.currentTarget).children('.arrows').toggleClass('flip-arrow')
    });
});
