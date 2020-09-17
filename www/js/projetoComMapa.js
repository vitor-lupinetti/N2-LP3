$(document).ready(function() {
  var mapa = L.map('mapa').setView([-23.735927, -46.5854127], 17);;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      posicao => {
        const {
          latitude,
          longitude
        } = posicao.coords;

        mapa.setView([latitude, longitude]);
      },
      erro => {
        $('.modal-title').html('Erro');
        $('.modal-body').html('Não foi possível obter sua localização atual');
        $('#modalAviso').modal('show');
      }
    );
  }

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmF0aGFucmVpcyIsImEiOiJja2YxeGZrNXQxMTltMnJta2ZmaHRzZHEyIn0.jrlmGBzK9Tz7cM8tW4sR2g'
  }).addTo(mapa);
});

/*
Desenvolver uma aplicação de âmbito acadêmico para uma consultoria de empregos fictícia onde uma das quatro funcionalidades é permitir ao usuário fazer uma busca por cursos de seu interesse.
https://vitor-lupinetti.github.io/N2-LP3/www/index.html
*/
