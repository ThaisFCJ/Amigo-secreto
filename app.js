//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let listaVerificada = false;
let inputElement = document.getElementById('amigo')

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
     adicionarAmigo() // Ações a serem executadas quando o Enter for pressionado
    }
  });
function adicionarAmigo(){

    if(inputElement.value == ""){
        alert("Por favor, insira um nome.");
    }else{
        amigos.push(inputElement.value); // se valor diferente de vazio, envia para o array (amigos)
        inputElement.value = '' // limpa o input
        listaVerificada = true; // indica que há um valor na lista
    }

   listaTabela() // executando o código a partir do momento que adiciona o amigo na lista
}

function listaTabela(){
    let lista = document.getElementById('listaAmigos') // Pega o elemento ul do HTML
    lista.innerHTML = ''; // deixa a lista vazia para não ocorrer duplicações

    for(let i =0; i<amigos.length;i++){ // for ([expressaoInicial]; [condicao]; [incremento])
        let nome = document.createElement('li') // cria o elemnto li
        nome.innerHTML = amigos[i]; // pega o elemento (i) do array e adiciona apenas ele
        lista.appendChild(nome); // insere os nomes listados na lista que aparece no HTML
    }
}

function sortearAmigo(){
    let lista = document.getElementById('listaAmigos') 
    lista.innerHTML = ''
    if (!listaVerificada && amigos.length ==0){  // o valor do listaVerificada precisa ser true para o if poder executar a função
         alert("Por favor, insira um nome.");
        
    } else{
        if (amigos.length === 0){
            vazio()
        } else{
            let resultado = document.getElementById('resultado') // id resultado do HTML
            let sortear = Math.floor(Math.random()* amigos.length); // pega a quantidade de elementos de forma aleatória
            let sorteio = amigos[sortear] // pega os elementos e atribui seus nomes 
            resultado.innerHTML = sorteio
            amigos.splice(sortear, 1) // impede que haja repetição
        }

    }
}

function vazio (){
    alert("A lista acabou! O jogo será reiniciado")
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    listaVerificada = false;
}

