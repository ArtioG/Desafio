function converterTemperatura(temperatura, escalaOrigem, escalaDestino) {
    let temperaturaConvertida;

    if (escalaOrigem === escalaDestino) {
        return temperatura; // Se a escala de  igual, não precisa converter
    }

    switch (escalaOrigem) {
        case 'C':
            if (escalaDestino === 'F') {
                temperaturaConvertida = (temperatura * 9/5) + 32;
            } else if (escalaDestino === 'K') {
                temperaturaConvertida = temperatura + 273.15;
            }
            break;
        case 'F':
            if (escalaDestino === 'C') {
                temperaturaConvertida = (temperatura - 32) * 5/9;
            } else if (escalaDestino === 'K') {
                temperaturaConvertida = ((temperatura - 32) * 5/9) + 273.15;
            }
            break;
        case 'K':
            if (escalaDestino === 'C') {
                temperaturaConvertida = temperatura - 273.15;
            } else if (escalaDestino === 'F') {
                temperaturaConvertida = ((temperatura - 273.15) * 9/5) + 32;
            }
            break;
        default:
            console.log('Escala de origem não suportada.');
            return null;
    }

    return temperaturaConvertida;
}

function solicitarDados() {
    const temperatura = parseFloat(prompt("Digite a temperatura:"));
    const escalaOrigem = prompt("Digite a escala de origem (C para Celsius, F para Fahrenheit, K para Kelvin):").toUpperCase();
    const escalaDestino = prompt("Digite a escala de destino (C para Celsius, F para Fahrenheit, K para Kelvin):").toUpperCase();

    const resultado = converterTemperatura(temperatura, escalaOrigem, escalaDestino);

    if (resultado !== null) {
        console.log(`A temperatura convertida é: ${resultado.toFixed(2)} ${escalaDestino}`);
    }
}

// Executa o programa
solicitarDados();
