document.getElementsByTagName('header')[0].appendChild(buildTopBar());
document.getElementsByTagName('footer')[0].appendChild(buildBottomBar());
document.getElementById('feature2').classList.add('selected');

document.addEventListener('DOMContentLoaded', function() {
  const filterForm = document.querySelector('#filterForm');

  function buildCard(job) {
    const {
      company,
      company_logo,
      company_url
    } = job;

    const image = document.createElement('img');
    image.src = company_logo;
    image.alt = company;
    image.classList.add('img-fluid');

    const anchor = document.createElement('a');
    anchor.target = '_blank';
    anchor.href = company_url;
    anchor.appendChild(image);

    const vacancieTitle = document.createElement('h5');
    vacancieTitle.classList.add('mt-auto');
    vacancieTitle.innerHTML = 'Vagas';

    const list = document.createElement('ul');
    list.classList.add('vacancies');
    list.classList.add('mb-0');
    list.classList.add('align-self-start');

    const vacanciesBlock = document.createElement('div');
    vacanciesBlock.append(vacancieTitle);
    vacanciesBlock.append(list);

    const card = document.createElement('div');
    card.classList.add('col-md-4');
    card.classList.add('col-sm-6');
    card.classList.add('mb-5');
    card.classList.add('myCard');
    card.dataset.company = company;
    card.appendChild(anchor);
    card.appendChild(vacanciesBlock);

    return card;
  }

  function buildListItem(job) {
    const {
      url,
      title
    } = job;

    const anchor = document.createElement('a');
    anchor.target = '_blank';
    anchor.href = url;
    anchor.style.color = 'black';
    anchor.innerHTML = title;

    const listItem = document.createElement('li');
    listItem.appendChild(anchor);

    return listItem;
  }

  function buildSpinner() {
    const textSpinner = document.createElement('span');
    textSpinner.classList.add('sr-only');
    textSpinner.innerHTML = 'Loading...';

    const spinner = document.createElement('div');
    spinner.classList.add('spinner-border');
    spinner.role = 'status';
    spinner.appendChild(textSpinner);

    return spinner;
  }

  function buildURL() {
    const description = document.querySelector('#description').value.trim();

    const apiurl = 'https://obs.github.com/positions.json?';
    const descriptionParameter = `description=${description}`;
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';

    return proxyurl + apiurl + descriptionParameter;
  }

  function displaySpinner() {
    const column = document.createElement('div');
    column.classList.add('col');
    column.appendChild(buildSpinner());

    const placeToList = document.querySelector('#list');
    placeToList.appendChild(column);
  }

  function displayFailRequest(error) {
    const placeToList = document.querySelector('#list');
    placeToList.removeChild(placeToList.firstChild); // It's going to remove the spinner

    const errorText = document.createElement('h3');
    errorText.classList.add('text-danger');
    errorText.classList.add('text-uppercase');
    errorText.innerHTML = 'Se esse erro foi gerado por erro de código então foi escrito por um humano, pois humanos erram';

    const column = document.createElement('div');
    column.classList.add('col');
    column.appendChild(errorText);

    placeToList.appendChild(column);
  }

  function displaySuccessRequest(response) {
    const placeToList = document.querySelector('#list');
    placeToList.removeChild(placeToList.firstChild); // It's going to remove the spinner

    response.forEach(function(job) {
      const {
        company
      } = job;
      let card = document.querySelector(`.myCard[data-company="${company}"]`);

      if(!card) {
        placeToList.appendChild(buildCard(job));
        card = document.querySelector(`.myCard[data-company="${company}"]`);
      }

      const jobsList = card.querySelector('ul');
      jobsList.appendChild(buildListItem(job));
    });
  }

  async function submitFilter(event) {
    event.preventDefault();

    displaySpinner();

    await fetch(buildURL())
      .then(function(response) {
        return response.json();
      })
      .then(displaySuccessRequest)
      .catch(displayFailRequest);
  }

  filterForm.addEventListener('submit', submitFilter);
});
