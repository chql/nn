$(function(){
  function moveRight() {
    $('#slider .slide-text h4').animate({opacity: 0});
    $('#slider ul').animate({
      left: - 800
    }, 1000, function () {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider .slide-text h4').text($('#slider ul li:first-child img').attr('alt'));
      $('#slider .slide-text h4').animate({opacity: 100});
      $('#slider ul').css('left', '');
    });
  };
  setInterval(moveRight, 10000);
});

