
function montanteFinanceiroJurosSimples(capital, taxa, tempo){
    let montante = capital * (1 + (taxa/100) * tempo);
    return montante;
}

function montanteFinanceiroJurosCompostos(capital, taxa, tempo){
    let montante = capital * Math.pow((1 + (taxa/100)), tempo);
    return montante;
}

    