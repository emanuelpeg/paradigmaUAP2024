export class Fraction {
  constructor(private numerator: number, private denominator = 1) {
    if (denominator === 0) {
      throw new Error("Denominator can't be 0");
    }
  }

  get values(): [number, number] {
    return [this.numerator, this.denominator]
  }

  mcd(): number {
    return 0;
  }
  simplify(): Fraction {
    return this;
  }

  sum(other: Fraction | number): Fraction {
    return this.simplify();
  }
  subtract(other: Fraction): Fraction {
    return this.simplify();
  }
  multiply(other: Fraction): Fraction {
    return this.simplify();
  }
  divide(other: Fraction): Fraction {
    return this.simplify();
  }
  negative(): Fraction {
    return this;
  }
  inverse(): Fraction {
    [this.denominator, this.numerator] = [this.numerator, this.denominator];
    return this;
  }

  isEqual(other: Fraction): boolean {
    return true;
    // 1/2 === 2/4
  }
  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }
  
  toJSON() {
    return this.toString()
  }
}