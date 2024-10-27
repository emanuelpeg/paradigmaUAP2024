import * as practica from './practica'

describe('Practica 5', () => {
  test('compose', () => {
    // Example functions to compose
    const double = (x: number): number => x * 2;
    const square = (x: number): number => x * x;
    const increment = (x: number): number => x + 1;

    // Composing the functions
    const composedFunction = practica.compose(double, square, increment);

    // Using the composed function
    const result = composedFunction(3); // ((3 + 1) ^ 2) * 2
    expect(result).toBe(32)
  })

  test('pipe', () => {
    // Example functions to pipe
    const double = (x: number): number => x * 2;
    const square = (x: number): number => x * x;
    const increment = (x: number): number => x + 1;

    // Piping the functions
    const pipedFunction = practica.pipe(double, square, increment);

    // Using the piped function
    const result = pipedFunction(3); // (3 * 2) ^ 2 + 1
    expect(result).toBe(37)
  })

  test('lens', () => {
    // Example user data
    const user: practica.User = {
      name: "John Doe",
      address: {
          street: "123 Main St",
          city: "Springfield",
      },
    };

    // Using the lens to get the city
    const city = practica.cityLensForUser.get(user);
    expect(city).toBe("Springfield")

    // Using the lens to set the city
    const updatedUser = practica.cityLensForUser.set(user)("New York");
    expect(practica.cityLensForUser.get(updatedUser)).toBe("New York")
  })

  test('generic lens', () => {
    // Example user data
    const user: practica.User = {
      name: "John Doe",
      address: {
          street: "123 Main St",
          city: "Springfield",
      },
    };

    // Using the generic lens to get the city
    const lens = practica.genericLens<practica.User, string>(['address', 'city']);
    const city = lens.get(user);
    expect(city).toBe("Springfield")

    // Using the generic lens to set the city
    const updatedUser = lens.set(user)("New York");
    expect(lens.get(updatedUser)).toBe("New York")
  })
})