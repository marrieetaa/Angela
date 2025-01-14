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

// $('h1').on('mouseover', function(){
//   $('h1').toggleClass('white');
// })

//before(); before element outside
//after();after element outside
//prepand();before element inside
//append(); after element inside
//remove();
//$('h1').append('<button>New</button>');
//$('button').remove();
