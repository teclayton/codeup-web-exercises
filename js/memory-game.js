// $('*').css('border', 'solid 1px black');

/////Card hover color/////

$('.card').hover(function(){
    $(this).css('background-color', 'B7EEEE')
},
    function(){
    $(this).css('background-color', 'white')
    }
);

/////Card Change on Click/////

$('.card').click(function changeCard(e){
    $(this).text('#')
});