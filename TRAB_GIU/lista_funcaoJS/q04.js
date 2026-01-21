function analisaPontuacoes(stringPontos) {
    const pontuacoes = stringPontos.split(',').map(Number);
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];
    let recordesQuebrados = 0;
    let piorJogo = 1;

    for (let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i];
            recordesQuebrados++;
        }
        
        if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i];
            piorJogo = i + 1;
        }
    }
    return [recordesQuebrados, piorJogo];
}

// Exemplo de uso:
const entrada = "10,20,20,8,25,3,0,30,1";
const resultado = analisaPontuacoes(entrada);
console.log(`Recordes quebrados: ${resultado[0]}, Pior jogo: ${resultado[1]}`);