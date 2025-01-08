$('h1').addClass('big-title');
$('button').addClass('colors');
$('a[href]').addClass('colors');

$('h1').click(function(){
  $('h1').toggleClass('darkred');
})

$('button').click(function(){
  $('h1').css('color','purple');
})