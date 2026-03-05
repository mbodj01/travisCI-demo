const { addition, soustraction, multiplication } = require('./index');

test('addition de 2 + 3 = 5', () => {
  expect(addition(2, 3)).toBe(5);
});

test('soustraction de 10 - 4 = 6', () => {
  expect(soustraction(10, 4)).toBe(6);
});

test('multiplication de 3 x 4 = 12', () => {
  expect(multiplication(3, 4)).toBe(12);
});
