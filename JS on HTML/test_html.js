var win;

function aparecer(){
    alert("chegou porra")
}

function abrirUfes(){
    win = window.open('http://www.ufes.br', '', 'width=300, height=300, top=100, left=10');  
    //#O primeiro parametro é a URL 
    //#O segundo parametro é para por o nome da janela 
    //#O terceiro parametro é como se fosse medidas da janela
    //#O quarto parametro
}

function fecharUfes(){
    win.close();
}

function abrir(){
    window.open('./pag02.html','','width=300, height=300, top=1000')
}

function fechar(){
    window.close()
}


/*
#PROPRIEDADES DE WINDOWS (ATRIBUTOS)
#screenX (me retorna posição horizontal da janela)
#screeny (me retorna posição vertical da janela)

#PROPRIEDADES DE SCREEN (ATRIBUTOS) {TELA INTEIRA}
#width (largura da janela)
#height (altura da janela)
#avalWidth (largura da tela)        aval means avaliable btw
#avalHeight (algura da tela)        aval means avaliable btw
*/

function mudar(){
    let dx = Math.random() *200  //deslocamento de x
    let dy = Math.random() *400  //deslocamento de y    

    if(window.screenX >= 0.7 * screen.availWidth)
    {
        win = window.moveTo(0,0)
    }
    else
    {
        win = window.moveTo(window.screenX + dx, window.screenY + dy)
    }
}

function validar(){
    let senha = document.form1.cSenha.value
    let senha2 = document.form1.cSenha2.value

    if(senha == senha2)
    {
        return true;
    }
    else
    {
        alert("Senha inválida")
        senha.focus()
        return false;
    }
}
