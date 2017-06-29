$(function(){
  var $mais = $('#mais-noticias');
  var $lista = $('#lista-noticias');
  var url = $mais.attr('href');
  var pagina = 1;
  $mais.click(function(e){
    e.preventDefault();
    pagina = pagina + 1;
    $.get(url + pagina, function(result){
      $lista.append(result);
      $lista.append($mais);
    });
  });
});
