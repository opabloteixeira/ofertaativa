const calculadora = require("../models/calculadora");

test("2 + 2 precisa ser 4", () => {
  const res = calculadora.somar(2, 2);

  expect(res).toBe(4);
});

test("2 + 500 precisa ser 502", () => {
  const res = calculadora.somar(2, 500);

  expect(res).toBe(502);
});
