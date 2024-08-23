function gerarNumeros(quantidade, maxNumero) {
    const numerosSorteados = new Set();
    while (numerosSorteados.size < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * maxNumero) + 1;
        numerosSorteados.add(numeroAleatorio);
    }
    return Array.from(numerosSorteados);
}

function sortearLoteria(tipoDeJogo) {
    let quantidade, maxNumero;

    switch (tipoDeJogo.toLowerCase()) {
        case 'quina':
            quantidade = 5;
            maxNumero = 80; // Máximo de números na Quina
            break;
        case 'lotofacil':
            quantidade = 15;
            maxNumero = 25; // Máximo de números na Lotofácil
            break;
        case 'mega-sena':
            quantidade = 6;
            maxNumero = 60; // Máximo de números na Mega-Sena
            break;
        default:
            console.log('Tipo de jogo não suportado.');
            return;
    }

    const numerosSorteados = gerarNumeros(quantidade, maxNumero);
    console.log(`Números sorteados para ${tipoDeJogo}: ${numerosSorteados.join(', ')}`);
}

// Exemplo de uso:
sortearLoteria('quina');
sortearLoteria('lotofacil');
sortearLoteria('mega-sena');
