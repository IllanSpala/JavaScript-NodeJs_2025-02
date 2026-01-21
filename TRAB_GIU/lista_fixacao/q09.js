function checarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

//test

let anoTeste1 = 2020;
let anoTeste2 = 1900;
let anoTeste3 = 2000;
let anoTeste4 = 2026;

console.log(checarAnoBissexto(anoTeste1)); // true
console.log(checarAnoBissexto(anoTeste2)); // false
console.log(checarAnoBissexto(anoTeste3)); // true
console.log(checarAnoBissexto(anoTeste4)); // false