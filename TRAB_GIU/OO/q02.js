function criarFuncionario() {
    return {
        // Atributos inicializados conforme solicitado
        cpf: "000.000.000-11",
        nome: "INDEFINIDO",
        salarioBase: 0,
        cargo: "",
        numeroDeFilhos: 0,

        // Método: Mostrar todos os atributos
        exibirFuncionario: function() {
            console.log(`
            --- Dados do Funcionário ---
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Cargo: ${this.cargo}
            Salário Base: R$ ${this.salarioBase.toFixed(2)}
            Nº de Filhos: ${this.numeroDeFilhos}
            `);
        },

        // Método: Mostrar apenas identificação
        exibirIdentificacao: function() {
            console.log(`Identificação -> Nome: ${this.nome} | CPF: ${this.cpf}`);
        },

        // Método: Calcular Imposto
        calcularImposto: function() {
            let imposto = 0;
            if (this.salarioBase <= 1500) {
                imposto = 0;
            } else if (this.salarioBase > 1500 && this.salarioBase <= 2750) {
                imposto = this.salarioBase * 0.12; // 12%
            } else {
                imposto = this.salarioBase * 0.235; // 23,5%
            }
            return imposto;
        },

        // Método: Calcular Salário Bruto
        // Fórmula: Base + (120 * filhos) - (11% do Base)
        calcularSalarioBruto: function() {
            const acrescimoFilhos = 120 * this.numeroDeFilhos;
            const descontoINSS = this.salarioBase * 0.11;
            return this.salarioBase + acrescimoFilhos - descontoINSS;
        }
    };
}

// --- I. CRIAR 2 OBJETOS E PEDIR INFORMAÇÕES ---

// Função auxiliar para preencher dados (simulando a entrada do usuário)
function preencherDados(funcionario, i) {
    // Em um navegador, você usaria prompt(). Aqui vou simular ou pedir via prompt se rodar no console.
    funcionario.nome = prompt(`Digite o nome do funcionário ${i}:`);
    funcionario.cpf = prompt(`Digite o CPF do funcionário ${i}:`);
    funcionario.salarioBase = parseFloat(prompt(`Digite o salário base do funcionário ${i}:`));
    funcionario.cargo = prompt(`Digite o cargo do funcionário ${i}:`);
    funcionario.numeroDeFilhos = parseInt(prompt(`Digite o número de filhos do funcionário ${i}:`));
}

const func1 = criarFuncionario();
console.log("Preenchendo Funcionário 1...");
preencherDados(func1, 1);

const func2 = criarFuncionario();
console.log("Preenchendo Funcionário 2...");
preencherDados(func2, 2);


// --- II. COMPARAR IMPOSTOS E IMPRIMIR O MAIOR PAGADOR ---

const imposto1 = func1.calcularImposto();
const imposto2 = func2.calcularImposto();

console.log("\n--- Comparativo de Imposto ---");
if (imposto1 > imposto2) {
    console.log(`Maior imposto a pagar:`);
    func1.exibirIdentificacao();
    console.log(`Valor: R$ ${imposto1.toFixed(2)}`);
} else if (imposto2 > imposto1) {
    console.log(`Maior imposto a pagar:`);
    func2.exibirIdentificacao();
    console.log(`Valor: R$ ${imposto2.toFixed(2)}`);
} else {
    console.log("Ambos pagam o mesmo valor de imposto.");
}


// --- III. CALCULAR SALÁRIO BRUTO E EXIBIR TUDO ---

console.log("\n--- Relatório Final (Salário Bruto) ---");

// Para o funcionário 1
console.log(`\n>> Funcionário 1: Salário Bruto Calculado: R$ ${func1.calcularSalarioBruto().toFixed(2)}`);
func1.exibirFuncionario();

// Para o funcionário 2
console.log(`\n>> Funcionário 2: Salário Bruto Calculado: R$ ${func2.calcularSalarioBruto().toFixed(2)}`);
func2.exibirFuncionario();