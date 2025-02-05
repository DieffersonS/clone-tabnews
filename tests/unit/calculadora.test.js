const calc = require("../../models/calculadora");

test("Teste de calculo de 2 + 2 tem que dar 4", () => {
  const calculo = calc.somar(2, 2);
  expect(calculo).toBe(4);
  console.log(calculo);
});

test("Teste de calculo 2 + banana tem que dar 'erro'", () => {
  const calculo = calc.somar(2, "banana");
  expect(calculo).toBe("Erro");
  console.log(calculo);
});
