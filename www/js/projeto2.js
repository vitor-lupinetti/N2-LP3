document.getElementsByTagName('header')[0].appendChild(buildTopBar());
document.getElementsByTagName('footer')[0].appendChild(buildBottomBar());
document.getElementById('feature2').classList.add('selected');

$(document).ready(function() {
  $(document).on('submit', '#filterForm', async function(event) {
    event.preventDefault();

    const description = $('#description').val().trim();
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const apiurl = 'https://jobs.github.com/positions.json?description=';

    await $.ajax({
      cache: false,
      dataType: 'json',
      method: 'get',
      url: proxyurl + apiurl + description,

      beforeSend: function() {
        $('#list').html(
          '<div class="col">' +
            '<div class="spinner-border" role="status">' +
              '<span class="sr-only">Loading...</span>' +
            '</div>' +
          '</div>'
        );
      }
    })
      .done(function(jobs) {
        $('#list').html('');

        jobs.forEach(function(job) {
          let $card = $(`.myCard[data-company="${job.company}"]`);

          if($card.length == 0) {
            $('#list').append(
              '<div' +
                ' class="col-md-4 col-sm-6 mb-5 myCard"' +
                ` data-company="${job.company}"` +
              '>' +
                `<a target="_blank" href="${job.company_url}">` +
                  `<img src="${job.company_logo}" alt="${job.company}" class="img-fluid" />` +
                '</a>' +
  
                '<h5 class="mt-5">Vagas</h5>' +
                '<ul class="vacancies mb-0 align-self-start"></ul>' +
              '</div>'
            );
          }

          $(`.myCard[data-company="${job.company}"] ul`).first().append(
            '<li>' +
              `<a target="_blank" href="${job.url}" style="color: black;">${job.title}</a>` +
            '</li>'
          );
        });
      })
      .fail(function(jqXHR) {
        console.log(jqXHR);
      });
  });
});
