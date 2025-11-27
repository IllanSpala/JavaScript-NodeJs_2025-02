function mudarFundo(){
    const valor = parseInt(Math.random() * 10)
    if(valor % 3 == 0){
        document.bgColor = 'lightgreen'
    }
    else{
        document.bgColor = 'lightgrey'
    }
}

function trocar(){
    const par = document.getElementById("texto")
    par.innerHTML = "Texto modificado pelo JS!" 
}

function reset(){
    location.reload()
}

function carregarImagem(){
    const imagem = document.getElementById('imagem')
    imagem.src = './imagens/arquitetura.png'
}

function desaparecer(){
    const imagem = document.getElementById('imagem')
    imagem.src =  ''
}

function ver(){
    const info = document.getElementById('este')
    info.style.display = 'contents'
}

function esconder(){

    info.style.display = 'none'
}

function carregar(){
    const reset = document.getElementById('reset')
    reset.bgColor = 'lightcoral'
}

function manipular(){
    let lista = document.getElementById('lista')
    let item = lista.firstElementChild
    item.innerHTML = "troquei"
    item.style.backgrouncolor = "red"

    //add

    let texto = document.createTextNode("consegui")
    let novoItem = document.createElement("li")
    novoItem.appendChild(texto)

    lista.appendChild(novoItem)
}

function estiloTabela(){
    let tan = document.getElementById('tabela')
    tab.className = 'table'
}

function voltarTabela(){
    let tan = document.getElementById('tabela')
    tab.classList.add('complemento')
    //to remove tab.classList.remove('table')
}