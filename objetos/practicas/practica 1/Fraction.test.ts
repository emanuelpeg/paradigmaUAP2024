import { Fraction } from "./Fraction"

describe('Fraction', () => {
  it('determines equality between 2 fractions', () => {
    expect(new Fraction(4, 5).isEqual(new Fraction(4, 5))).toBe(true);
    expect(new Fraction(4, 5).isEqual(new Fraction(8, 10))).toBe(true);
    expect(new Fraction(4, 5).isEqual(new Fraction(4, 10))).toBe(false);
  })
})