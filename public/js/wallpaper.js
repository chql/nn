$(function(){
  $.get('https://www.reddit.com/r/wallpapers/top.json')
    .done(function(response){
      var post = response.data.children[0].data;
      var autor = post.author;
      var url   = post.url;
      var $h3 = $('#wallpaper h3');
      var $a = $('#wallpaper a');
      var $img = $('#wallpaper a img');
      $a.attr('href', url);
      $img.attr('src', url);
      $img.attr('alt', 'Imagem do dia por ' + autor);
      $h3.append(autor);
    });
});
