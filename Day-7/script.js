$('h1').addClass('big-title');
$('button').addClass('colors');
$('a[href]').addClass('colors');

$('h1').click(function(){
  $('h1').toggleClass('darkred');
})

$('button').click(function(){
  $('h1').toggleClass('purple');
})

$('body').keydown(function(event){
     $('h1').text(event.key);
})