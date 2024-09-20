var numero = '';
var operadorAtual = '';
var numeroAnterior = '';


function addNumero(caractere) {
    numero += caractere;
    document.getElementById('display').value = numero;
}


function limparDisplay() {
    numero = '';
    operadorAtual = '';
    numeroAnterior = '';
    document.getElementById('display').value = '';
}


function apagar() {
    numero = numero.slice(0, -1);
    document.getElementById('display').value = numero;
}


function operador(op) {
    if (numero !== '') {
        operadorAtual = op;
        numeroAnterior = numero;
        numero = '';
        document.getElementById('display').value = '';
    }
}


function calcular() {
    let resultado = 0;
    let atual = parseFloat(numero);
    let anterior = parseFloat(numeroAnterior);

    if (operadorAtual === '+') {
        resultado = anterior + atual;
    } else if (operadorAtual === '-') {
        resultado = anterior - atual;
    } else if (operadorAtual === '*') {
        resultado = anterior * atual;
    } else if (operadorAtual === '/') {
        if (atual === 0) {
            document.getElementById('display').value = 'Erro: divisão por zero';
            return;
        }
        resultado = anterior / atual;
    }

    document.getElementById('display').value = resultado;
    numero = resultado.toString();
    operadorAtual = '';
    numeroAnterior = '';
}


function raizQuadrada() {
    if (numero !== '') {
        let atual = parseFloat(numero);
        if (atual < 0) {
            document.getElementById('display').value = 'Erro: número negativo';
            return;
        }
        let resultado = Math.sqrt(atual);
        document.getElementById('display').value = resultado;
        numero = resultado.toString();
    }
}


function porcentagem() {
    if (numero !== '') {
        let atual = parseFloat(numero);
        let resultado = atual / 100;
        document.getElementById('display').value = resultado;
        numero = resultado.toString();
    }
}
