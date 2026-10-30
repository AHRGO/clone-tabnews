const calculadora = require("../models/calculadora.js");

test("2 + 2 deveria retornar 4", () => {
    let resultado = calculadora.somar(2,2);

    expect(resultado).toBe(4);
})

test("5 + 3 deveria retornar 8", () => {
    // expect(calculadora.somar(5 + 3)).toBe(8); retorna NaN
    let resultado = calculadora.somar(5, 3);

    expect(resultado).toBe(8);
})

test("Espero que X + 5 dê erro", () => {
    const result = calculadora.somar('X', 5);

    expect(result).toBe("Erro");
})

test("Espero que 3 * 5 seja 15", () => {
    const result = calculadora.multiplicar(3, 5)

    expect(result).toBe(15);
});

