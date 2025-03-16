let amigos = [];

function adicionarAmigo() {

    let nome = document.getElementById("amigo").value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    amigos.push(nome);
    document.getElementById("amigo").value = "";
    mostrarListaDeAmigos();
}

function mostrarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        
        let item = document.createElement("li"); 
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione amigos antes de sortear.");
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let itemResultado = document.createElement("li");
    itemResultado.textContent = "O amigo secreto sorteado é: " + amigoSorteado;
    resultado.appendChild(itemResultado);
}