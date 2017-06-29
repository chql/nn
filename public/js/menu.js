$(function(){
  var menu = true;
  var tema = true;
  var font = 100;
  $('#brand').click(function(e){
    e.preventDefault();
    if(menu) $('#dropdown').slideDown(300);
    else $('#dropdown').slideUp(300);
    menu = !menu;
  });
  $('#dropdown').slideUp(0);
  $('#alterar-tema').click(function(e){
    e.preventDefault();
    if(tema) {
      $('nav').css('background-color', 'black');
      $('.container').css('background-color', 'black');
    }
    else {
      $('nav').css('background-color', 'white');
      $('.container').css('background-color', 'white');
    }
    tema = !tema;
  });
  $('#fonte-maior').click(function(e){
    e.preventDefault();
    font += 5;
    $('*').css('font-size', font+'%');
  });
  $('#fonte-menor').click(function(e){
    e.preventDefault();
    font -= 5;
    $('*').css('font-size', font+'%');
  });
});

