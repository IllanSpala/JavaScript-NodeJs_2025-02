/**
 * Função para calcular o valor do lanche
 * @param {number} codigo - O código do item (ex: 100, 200...)
 * @param {number} quantidade - A quantidade de itens
 */
function calcularValorLanche(codigo, quantidade) {
    let precoUnitario = 0;

    switch (codigo) {
        case 100: // Cachorro Quente
            precoUnitario = 3.00;
            break;
        case 200: // Hambúrguer Simples
            precoUnitario = 4.00;
            break;
        case 300: // Cheeseburguer
            precoUnitario = 5.50;
            break;
        case 400: // Bauru
            precoUnitario = 7.50;
            break;
        case 500: // Refrigerante
            precoUnitario = 3.50;
            break;
        case 600: // Suco
            precoUnitario = 2.80;
            break;
        default:
        return "Produto não existente";
    }
    const total = precoUnitario * quantidade;
    return `Valor a pagar: R$ ${total.toFixed(2).replace('.', ',')}`;
}

// --- Exemplos de Teste ---

// Exemplo 1: 2 Cachorros Quentes (Código 100)
console.log(calcularValorLanche(100, 2)); 
// Saída esperada: Valor a pagar: R$ 6,00

// Exemplo 2: 1 Bauru (Código 400)
console.log(calcularValorLanche(400, 1)); 
// Saída esperada: Valor a pagar: R$ 7,50

// Exemplo 3: 3 Sucos (Código 600)
console.log(calcularValorLanche(600, 3)); 
// Saída esperada: Valor a pagar: R$ 8,40

// Exemplo 4: Código Inválido
console.log(calcularValorLanche(999, 1)); 
// Saída esperada: Produto não existente
