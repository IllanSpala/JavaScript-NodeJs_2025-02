// ENTRANDO EM ORIENTAÇÃO A OBJETOS (9/10/25)
//primeira forma de criar um objeto (notação literal) {serve para uma e somente uma variavel} #apenas colocar {} em uma variavel ja a torna em um objeto
var produto = {
    codigo: 0,  // virgula que separa os atributos e não precisa declarar o tipo
    nome: "", 
    preco: 0,  

    calcularTotal(qtd){  //NÃO PRECISA USAR FUNCTION
        return this.preco * qtd;
    }, // SEMPRE COLOCAR VIRGULA
    
//  cosnt calcularTotal2 = (qtd) => preco * qtd, // ARROW FUNCTION (FUNÇÃO ANONIMA)

    exibirDados(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: $${this.preco}`);
    }
}

function Produto(cod,n,p){
    this.codigo = cod;
    this.nome = n;
    this.preco = p;

    this.exibir(){
        console.log(`Codigo: ${codigo}`);
        console.log(`Nome: ${nome}`);      
        console.log(`Preço: ${preco}`);   
    }
}

produto.nome = "Captador Jupiter";
produto.preco = 799,99;

produto.exibirDados();
