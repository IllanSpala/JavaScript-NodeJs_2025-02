function listar(){
    const itens = document.getElementById("li");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    resultado.inneHTML += "<p>Quantidade de itens: " + itens.length + "</p>";

    for(let i = 0; i < itens.length; i++){
        resultado.innerHTML += itens[i].innerHTML + "<br>";
    }
}

function listarSegunda(){
    const listas = document.getElementsByTagName('ul');
    const segundaLista = listas[1];
    const itens = segundaLista.getElementsByTagName('li');
    
    const resultado = document.getElementById("resultado2");
    resultado.innerHTML = "";

    resultado.innerHTML += "<p>Quantidade de itens na segunda lista: " + itens.length + "</p>";

    for(let i = 0; i < itens.length; i++){
        resultado.innerHTML += itens[i].innerHTML + "<br>";
    }
}