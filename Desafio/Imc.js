function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

function solicitarDados() {
    const peso = parseFloat(prompt("Digite seu peso em kg (ex: 70.5):"));
    const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));

    if (isNaN(peso) || isNaN(altura)) {
        console.log("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}

// Executa o programa
solicitarDados();
