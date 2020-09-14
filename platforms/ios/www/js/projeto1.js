function callApi() {

    var input = document.getElementById("input").value;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = 'https://api.github.com/users/' + input;
    console.log(proxyurl + url);


    fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(resposta => resposta.json())
        .then(resposta => preencheDados(resposta))
        .catch(erro => console.log(erro));

}

function preencheDados(data) {
    var cardDiv = document.querySelector('#card-div');
    cardDiv.style.visibility = 'visible';
    Append(data);
}

function Append(data) {
    let html = '';
    let bio = '';
    if(data.bio){
        bio = `<p class="card-text">Bio: ${data.bio}</p>`
    }

    let htmlSegment = ` <div class="card" style="width: 18rem;">
                                    <img class="card-img-top" src="${data.avatar_url}">
                                    <div class="card-body">
                                    <h5 class="card-title">${data.name}</h5>
                                    <p class="card-text">Seguidores: ${data.followers}</p>
                                    <p class="card-text">Seguindo: ${data.following}</p>
                                    <p class="card-text">Repositórios: ${data.public_repos}</p>
                                    ${bio}
                                    <a href="#" class="btn btn-primary">Repositórios</a>
                                    </div>
                                </div>`;

    html += htmlSegment;


    let container = document.querySelector('#card-div');
    container.innerHTML = html;
}    