function somar(num1, num2) {
    if (typeof num1 !== "number") return "Erro";
    return num1 + num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

exports.somar = somar;
exports.multiplicar = multiplicar;
