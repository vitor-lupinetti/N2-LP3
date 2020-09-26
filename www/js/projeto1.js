document.querySelector('header').appendChild(buildTopBar());
document.querySelector('footer').appendChild(buildBottomBar());
document.querySelector('#feature1').classList.add('selected');

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
                                    <a href="projeto1.repositories.html?${data.login}" class="btn btn-primary">Repositórios</a>
                                    </div>
                                </div>`;

    html += htmlSegment;


    let container = document.querySelector('#card-div');
    container.innerHTML = html;
}    



function CapturaParametrosUrl() {

    //captura a url da página
    var url = window.location.href; 
	
	//tenta localizar o ?
    var res = url.split('?'); 
    	
	if (res[1] === undefined) {
        alert('página sem parâmetros.');
    }
	
    if (res[1] !== undefined) {
        //tenta localizar os & (pode haver mais de 1)
        return res[1];
		
    }
}



function callApiRepo() {


    var url = 'https://api.github.com/users/' + CapturaParametrosUrl() + '/repos';


    fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(resposta => resposta.json())
        .then(resposta => AppendRepo(resposta))
        .catch(erro => console.log(erro));

}



function AppendRepo(data) {
    let html = '';
    data.map(repo => {
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <img class="card-img-top" src="./img/github.png">
                                    <p class="card-title">Nome: ${repo.name}</p>
                                    <p>Autor: ${repo.owner.login}</p>
                                    <p>Issues: ${repo.open_issues}   
                                    <p>Stars: ${repo.stargazers_count}</p>
                                    <p>Forks ${repo.forks_count}</p>
                                    <a href= ${repo.html_url} class="btn btn-info">Abrir no git</a>
                                </div>
                            </div> `;

        html += htmlSegment;
    });

    let container = document.querySelector('.main-container-repos');
    container.innerHTML = html;
}

function CapturaParametrosUrl() {

    //captura a url da página
    var url = window.location.href;

    //tenta localizar o ?
    var res = url.split('?');

    if (res[1] === undefined) {
        alert('página sem parâmetros.');
    }

    if (res[1] !== undefined) {
        //tenta localizar os & (pode haver mais de 1)
        return res[1];

    }
}