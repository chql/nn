$(function(){
  var D = new Date();
  setInterval(function(){
    D.setTime(Date.now());
    $('#relogio').text(D.toLocaleString());
  }, 1000);
});
