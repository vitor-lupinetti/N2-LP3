document.getElementsByTagName('footer')[0].appendChild(buildBottomBar());
document.getElementById('feature4').classList.add('selected');
let path1;
let path2;

let valorPrimeiro;
let valorSegundo;

var nome1;
var nome2;
function GetRepos(){
    var prog1 = document.getElementById("Linguagem1");
    nome1 = prog1.options[prog1.selectedIndex].value;
    path1 =  "https://api.github.com/search/repositories?q=language:" + nome1;
               // primeiraRequisicao(path1);
    console.log("1");
    var prog2 = document.getElementById("Linguagem2");
    nome2 = prog2.options[prog2.selectedIndex].value;
    path2 =  "https://api.github.com/search/repositories?q=language:" + nome2;
                //segundaRequisicao(path2);
    console.log("2");
    requisicoesGrafico(path1, path2);
               
               
    }
           
async function requisicoesGrafico(path1,path2){

    let requisicao1 = await fetch(path1);
    let objRequisicao1 = await requisicao1.json();
    console.log(objRequisicao1);
    valorPrimeiro = objRequisicao1.total_count;

    let requisicao2 = await fetch(path2);
    let objRequisicao2 = await requisicao2.json();
    console.log(objRequisicao2);
    valorSegundo = objRequisicao2.total_count;

    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx,{
        type:'bar',
        data:{
            labels:[nome1, nome2],
            datasets: [{
               
                label:'',
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                data: [valorPrimeiro, valorSegundo],
                borderWidth: 1,
                barThickness: 50,
                            
                }]
                },
                options:{
                        
                    scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
    console.log(nome1 + " primeiro: " + valorPrimeiro +" "+ nome2 + " segundo: " + valorSegundo);

    }