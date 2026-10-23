const calculadora = require("../models/calculadora.js");

test("Espero que 2 + 2 seja 4", () => {
    const result = calculadora.somar(2,2);

    expect(result).toBe(4);
});

test("Espero que X + 5 dê erro", () => {
    const result = calculadora.somar('X', 5);

    expect(result).toBe("Erro");
})

test("Espero que 3 * 5 seja 15", () => {
    const result = calculadora.multiplicar(3, 5)

    expect(result).toBe(15);
});

