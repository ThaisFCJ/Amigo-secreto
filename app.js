//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

let inputElement = document.getElementById('amigo')


function adicionarAmigo(){
    if(inputElement.value == ""){
        alert("Por favor, insira um nome.");
    }else{
        amigos.push(inputElement.value); // se valor diferente de vazio, envia para o array (amigos)
        inputElement.value = '' // limpa o input
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
    if (amigos == ""){
        alert("Por favor, insira um nome.");
    } else{
        let resultado = document.getElementById('resultado')
        let sortear = Math.floor(Math.random()* amigos.length);
        let sorteio = amigos[sortear]
        resultado.innerHTML = sorteio
        amigos.splice(sortear, 1)
    }
    
}

