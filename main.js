$(document).ready(() =>
{
    
    $('h2').click(function()
    {
        $(event.currentTarget).toggleClass('bold')
        $(event.currentTarget).toggleClass('remove-border')
        $(event.currentTarget).next('.As').slideToggle();
        $(event.currentTarget).children('.arrows').toggleClass('flip-arrow')

    });
});
