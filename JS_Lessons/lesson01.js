const input = require('readline-sync') // criando uma variavel constante para ter o modulo dentro dele, o require está chamando esse módulo como se fosse uma função.
console.log("teste de javasScript") // para gerar comentários no terminal.
var data = new Date() // criando uma variavel data que recebe a função Date() que pega a data atual do sistema. {new fez ela se tornar um objeto}
// aula 03, baixamos node_modules pasta { npm install readline-sync }

var nome = input.question("- Digite seu nome: ")
console.log("- Bem vindo " + nome + "!\n")
var comidaFav = input.question("- E qual sua comida favorita " + nome + "? ", {
    hideEchoBack: true
});
console.log("- Ouie, " + comidaFav + " é do caralho\n")

// Aprendendo templateString
var bandFav = input.question("- Ta, mas e sua banda favorita? " )
console.log(`É, ${bandFav} nervoso dms!`)
// templateString é uma forma mais fácil de concatenar strings, usando crase ` ` e ${} para inserir variaveis


// Funções de uso da String
console.log(`
****Upper cased Anwser**** 
NOME: ${nome.toUpperCase()}
COMIDA: ${comidaFav.toUpperCase()}
BANDA: ${bandFav.toUpperCase()}
******End of Anwsers******
Seu Acesso foi feito às: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}!
`)
// toUpperCase() deixa todas as letras maiusculas





