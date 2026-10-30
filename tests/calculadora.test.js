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
