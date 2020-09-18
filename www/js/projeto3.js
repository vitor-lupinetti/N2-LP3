document.getElementsByTagName('footer')[0].appendChild(buildBottomBar());
document.getElementById('feature3').classList.add('selected');

function listaFormacoes() {
    var categoria = CapturaParametrosUrl();
    let html = '';
    if (categoria === 'mobile') {
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações mobile</h3>
                                    <img class="card-img-top" src="./img/mobile.png">
                                    <a href='projeto3.cursos.html?android' class="formacao">Android</a>
                                    <hr>
                                    <a href='projeto3.cursos.html?ios' class="formacao">IOS</a>   
                                    <hr>
                                    <a href='projeto3.cursos.html?xamarin' class="formacao">Multiplataforma</a>
                                </div>
                            </div> `;

        html += htmlSegment;
        let container = document.querySelector('.content');
        container.innerHTML = html;
    }
    else if (categoria === 'programacao') {
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações de programação</h3>
                                    <img class="card-img-top" src="./img/programacao.png">
                                    <a href='projeto3.cursos.html?java' class="formacao">Java</a>
                                    <hr>
                                    <a href='projeto3.cursos.html?dotnet' class="formacao">.NET</a>   
                                    <hr>
                                    <a href='projeto3.cursos.html?node-js-12' class="formacao">Node Js</a>
                                </div>
                            </div> `;

        html += htmlSegment;
        let container = document.querySelector('.content');
        container.innerHTML = html;
    }
    else if (categoria === 'frontend') {
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações de front-end</h3>
                                    <img class="card-img-top" src="./img/programacao.png">
                                    <a href='projeto3.cursos.html?angular' class="formacao">Angular</a>
                                    <hr>
                                    <a href='projeto3.cursos.html?react-js' class="formacao">React Js</a>   
                                    <hr>
                                    <a href='projeto3.cursos.html?html-e-css' class="formacao">HTML e CSS</a>
                                </div>
                            </div> `;

        html += htmlSegment;
        let container = document.querySelector('.content');
        container.innerHTML = html;
    }
    else if (categoria === 'datascience') {
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações Data Science</h3>
                                    <img class="card-img-top" src="./img/datascience.png">
                                    <a href='projeto3.cursos.html?machine-learning' class="formacao">Machine Learning</a>
                                    <hr>
                                    <a href='projeto3.cursos.html?python-data-science' class="formacao">Python para data science</a>   
                                    <hr>
                                    <a href='projeto3.cursos.html?microsoft-sql-server-2017' class="formacao">SQL</a>
                                </div>
                            </div> `;

        html += htmlSegment;
        let container = document.querySelector('.content');
        container.innerHTML = html;
    }
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

function listaCursos(formacao) {
    let html = '';
    formacao.steps[0].courses.map(curso => {
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <img class="card-img-top" src="./img/programacao.png">
                                    <p class="card-title">Formação: ${curso.title}</p>
                                    <a onClick="callApiCurso('${curso.slug}')" class="btn btn-info">Visualizar</a>
                                </div>
                            </div> `;

        html += htmlSegment;
    });

    let container = document.querySelector('.cursos');
    container.innerHTML = html;
}



function callApiFormacao() {


    var url = 'https://www.alura.com.br/api/formacao-' + CapturaParametrosUrl();


    fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(resposta => resposta.json())
        .then(resposta => listaCursos(resposta))
        .catch(erro => console.log(erro));

}

function callApiCurso(curso) {


    var url = 'https://www.alura.com.br/api/curso-' + curso;


    fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(resposta => resposta.json())
        .then(resposta => exibeCurso(resposta))
        .catch(erro => console.log(erro));

}


function exibeCurso(data) {
    let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h4>Apresentação do curso</h4>
                                    <video width="300" height="200" class="elasticMedia" controls="" controlslist="nodownload">
                                        <source src="${data.video_1a_aula}" type="video/mp4">
                                    </video>
                                    <p class="card-title"><strong>Curso:</strong> ${data.nome}</p>
                                    <p><strong>Descrição:</strong> ${data.metadescription}</p>
                                    <p><strong>Nota do curso:</strong> ${data.nota}</p>
                                    <p><strong>Carga horária:</strong> ${data.carga_horaria} horas</p>
                                    <a href="https://www.alura.com.br/curso-online-${data.slug}"class="btn btn-info">Acessar curso no alura</a>
                                </div>
                            </div> `;


    let container = document.querySelector('.cursos');
    container.innerHTML = "";
    container.innerHTML = htmlSegment;
}