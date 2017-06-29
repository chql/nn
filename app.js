const express = require('express');
const http    = require('http');
const xml2js  = require('xml2js');
const async   = require('async');

var app = express();
var server = http.Server(app);

app.set('view engine', 'pug');
app.use(express.static('public/'));

var canais = require('./canais.json');
var menus = [];

for(var c in canais)
  menus.push({'canal':c,'nome':canais[c].nome});

const canalHandle = (req, res) => {
  var nome = req.params.canal || 'principal';
  var canal = canais[ nome ];
  if(canal === undefined)
    res.status(404).send('404 - Not found');
  else
    res.render('canal', {
      destaques: canal.destaques,
      noticias: canal.noticias.slice(0,10),
      ajax_url: '/a/' + nome + '/',
      menu: menus
    });
};

app.get('/c/:canal', canalHandle);
app.get('/', canalHandle);

app.get('/a/:canal/:p', (req, res) => {
  var canal = canais[ req.params.canal ];
  var p = parseInt(req.params.p);
  var noticias = canal.noticias.slice(10*p, (10*p)+10);
  res.render('noticias', {noticias: noticias});
});

function atualizaCanais() {
  var lista = [];
  for(var c in canais)
    lista.push(c);
  async.each(lista, (c) => {
    var canal = canais[ c ];
    http.get(canal.url, (res) => {
      var data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        xml2js.parseString(data, (err, feed) => {
          var items = feed.rss.channel[0].item;
          canal.destaques = items.slice(0, 5);
          canal.noticias = items.slice(5);
        });
      });
    });
  });
};

atualizaCanais();

server.listen(8000, function(){
  console.log('Servindo na porta 8000');
});

