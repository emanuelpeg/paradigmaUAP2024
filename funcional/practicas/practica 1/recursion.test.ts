import * as recursion from './recursion';

describe('cuadrado', () => {
  it('cuadrado(2) => 4', () => {
    expect(recursion.cuadrado(2)).toBe(4);
  });
  it('cuadrado(3) => 9', () => {
    expect(recursion.cuadrado(3)).toBe(9);
  });
  it('cuadrado(4) => 16', () => {
    expect(recursion.cuadrado(4)).toBe(16);
  });
  it('cuadrado(5) => 25', () => {
    expect(recursion.cuadrado(5)).toBe(25);
  });
})

describe('potencia', () => {
  it('potencia(2, 3) => 8', () => {
    expect(recursion.potencia(2, 3)).toBe(8);
  });
  it('potencia(3, 3) => 27', () => {
    expect(recursion.potencia(3, 3)).toBe(27);
  });
  it('potencia(4, 3) => 64', () => {
    expect(recursion.potencia(4, 3)).toBe(64);
  });
  it('potencia(5, 3) => 125', () => {
    expect(recursion.potencia(5, 3)).toBe(125);
  });
})

describe('factorial', () => {
  it('factorial(1) => 1', () => {
    expect(recursion.factorial(1)).toBe(1);
  });
  it('factorial(2) => 2', () => {
    expect(recursion.factorial(2)).toBe(2);
  });
  it('factorial(3) => 6', () => {
    expect(recursion.factorial(3)).toBe(6);
  });
  it('factorial(4) => 24', () => {
    expect(recursion.factorial(4)).toBe(24);
  });
})

describe('fibonacci', () => {
  it('fibonacci(1) => 1', () => {
    expect(recursion.fibonacci(1)).toBe(1);
  });
  it('fibonacci(2) => 1', () => {
    expect(recursion.fibonacci(2)).toBe(1);
  });
  it('fibonacci(3) => 2', () => {
    expect(recursion.fibonacci(3)).toBe(2);
  });
  it('fibonacci(4) => 3', () => {
    expect(recursion.fibonacci(4)).toBe(3);
  });
  it('fibonacci(5) => 5', () => {
    expect(recursion.fibonacci(5)).toBe(5);
  });
  it.skip('fibonacci(55) => 139583862445', () => {
    expect(recursion.fibonacci(55)).toBe(139583862445);
  });
})

describe('pascal', () => {
  it('pascal(0, 0) => 1', () => {
    expect(recursion.pascal(0, 0)).toBe(1);
  });
  it('pascal(1, 0) => 1', () => {
    expect(recursion.pascal(1, 0)).toBe(1);
  });
  it('pascal(1, 1) => 1', () => {
    expect(recursion.pascal(1, 1)).toBe(1);
  });
  it('pascal(2, 0) => 1', () => {
    expect(recursion.pascal(2, 0)).toBe(1);
  });
  it('pascal(2, 1) => 2', () => {
    expect(recursion.pascal(2, 1)).toBe(2);
  });
  it('pascal(2, 2) => 1', () => {
    expect(recursion.pascal(2, 2)).toBe(1);
  });
  it('pascal(3, 0) => 1', () => {
    expect(recursion.pascal(3, 0)).toBe(1);
  });
  it('pascal(3, 1) => 3', () => {
    expect(recursion.pascal(3, 1)).toBe(3);
  });
  it('pascal(3, 2) => 3', () => {
    expect(recursion.pascal(3, 2)).toBe(3);
  });
  it('pascal(3, 3) => 1', () => {
    expect(recursion.pascal(3, 3)).toBe(1);
  });
})

describe('mcd', () => {
  it('mcd(1, 1) => 1', () => {
    expect(recursion.mcd(1, 1)).toBe(1);
  });
  it('mcd(8, 6) => 2', () => {
    expect(recursion.mcd(8, 6)).toBe(2);
  });
  it('mcd(12, 8) => 4', () => {
    expect(recursion.mcd(12, 8)).toBe(4);
  });
  it('mcd(15, 10) => 5', () => {
    expect(recursion.mcd(15, 10)).toBe(5);
  });
})

describe('balance', () => {
  it('balance(["(",")"]) => true', () => {
    expect(recursion.balance(["(",")"])).toBe(true);
  });
  it('balance(["(","(",")",")","(",")"]) => true', () => {
    expect(recursion.balance(["(","(",")",")","(",")"])).toBe(true);
  });
  it('balance(["(","(",")","(",")",")"]) => true', () => {
    expect(recursion.balance(["(","(",")","(",")",")"])).toBe(true);
  });
  it('balance(["(","(",")",")",")"]) => false', () => {
    expect(recursion.balance(["(","(",")",")",")"])).toBe(false);
  });
  it('balance(["(","(",")","(",")"]) => false', () => {
    expect(recursion.balance(["(","(",")","(",")"])).toBe(false);
  });
  it('balance([")","("]) => false', () => {
    expect(recursion.balance([")","("])).toBe(false);
  });
})

describe('contarCambio', () => {
  it('contarCambio([1,2], 4) => 3', () => {
    expect(recursion.contarCambio([1,2], 4)).toBe(3);
  });
  it('contarCambio([1,2], 5) => 3', () => {
    expect(recursion.contarCambio([1,2], 5)).toBe(3);
  });
  it('contarCambio([1,2], 6) => 4', () => {
    expect(recursion.contarCambio([1,2], 6)).toBe(4);
  });
  it('contarCambio([1,2,3], 5) => 5', () => {
    expect(recursion.contarCambio([1,2,3], 5)).toBe(5);
  });
})

describe('palindromo', () => {
  it('palindromo([]) => true', () => {
    expect(recursion.palindromo([])).toBe(true);
  });
  it('palindromo(["a","l","a"]) => true', () => {
    expect(recursion.palindromo(["a","l","a"])).toBe(true);
  });
  it('palindromo(["a","l","l","a"]) => true', () => {
    expect(recursion.palindromo(["a","l","l","a"])).toBe(true);
  });
  it('palindromo(["h","a","l","l","a"]) => false', () => {
    expect(recursion.palindromo(["h","a","l","l","a"])).toBe(false);
  });
})