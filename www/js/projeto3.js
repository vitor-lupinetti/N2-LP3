function listaFormacoes(){
    var categoria = CapturaParametrosUrl();
    let html = '';
    if(categoria === 'mobile'){
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações mobile</h3>
                                    <img class="card-img-top" src="./img/mobile.png">
                                    <a class="formacao">Android</a>
                                    <hr>
                                    <a class="formacao">IOS</a>   
                                    <hr>
                                    <a class="formacao">Multiplataforma</a>
                                </div>
                            </div> `;

        html += htmlSegment;
        let container = document.querySelector('.content');
        container.innerHTML = html;
    }
    else if(categoria === 'programacao'){
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações de programação</h3>
                                    <img class="card-img-top" src="./img/programacao.png">
                                    <a class="formacao">Java</a>
                                    <hr>
                                    <a class="formacao">.NET</a>   
                                    <hr>
                                    <a class="formacao">Node Js</a>
                                </div>
                            </div> `;

        html += htmlSegment;
        let container = document.querySelector('.content');
        container.innerHTML = html;
    }
    else if(categoria === 'frontend'){
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações de front-end</h3>
                                    <img class="card-img-top" src="./img/programacao.png">
                                    <a class="formacao">Angular</a>
                                    <hr>
                                    <a class="formacao">React Js</a>   
                                    <hr>
                                    <a class="formacao">HTML e CSS</a>
                                </div>
                            </div> `;

        html += htmlSegment;
        let container = document.querySelector('.content');
        container.innerHTML = html;
    }
    else if(categoria === 'datascience'){
        let htmlSegment = ` <div class="card ">
                                <div class="card-body card-flex">
                                    <h3 class="card-title text-center">Formações Data Science</h3>
                                    <img class="card-img-top" src="./img/datascience.png">
                                    <a class="formacao">Machine Learning</a>
                                    <hr>
                                    <a class="formacao">Python para data science</a>   
                                    <hr>
                                    <a class="formacao">SQL</a>
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