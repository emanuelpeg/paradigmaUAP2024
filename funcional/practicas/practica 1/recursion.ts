// Defina una función que calcule el cuadrado de un número
export function cuadrado(n: number): number {
  return Number.MAX_SAFE_INTEGER;
}

// Defina una función que calcule la enésima potencia positiva de un número
export function potencia(base: number, exponente: number): number {
  return Number.MAX_SAFE_INTEGER;
}

// Defina una función que calcule el factorial de un número
export function factorial(n: number): number {
  return Number.MAX_SAFE_INTEGER;
}

// Defina una función que calcule el n-ésimo número de la serie de Fibonacci
export function fibonacci(n: number): number {
  return Number.MAX_SAFE_INTEGER;
}

// Realice una funcion que dado el numero de fila y columna,
// calcule el valor del numero que se encuentre el la piramide de Pascal
export function pascal(fila: number, columna: number): number {
  return Number.MAX_SAFE_INTEGER;
}

// Defina una función que calcule el máximo común divisor de dos números
export function mcd(a: number, b: number): number {
  return Number.MAX_SAFE_INTEGER;
}

/**
 * Realice una función que permita saber si un texto tiene los parentesis balanceados, por ejemplo:
 * () => OK
 * ((()))() => OK
 * (()()) => OK
 * (()())) => no OK
 * (()(()) => no OK
 * )( => no OK
 */
type Parentesis = '(' | ')';
export function balance(chars: Parentesis[]): boolean {
  return false;
}

/**
 * Realice una función que cuente cuantas combinaciones pueden existir con monedas para un valor determinado, por ejemplo:
 * monedas (1,2) y valor es 4 , podemos llegar con las siguientes convinaciones (1,1,1,1) (1,1,2) (2,2)
 * por lo que la función debería retornar 3.
 */
export function contarCambio(monedas: number[], valor: number): number {
  return Number.MAX_SAFE_INTEGER;
}

/**
 * Realice una función que indique si una lista de letras es palindromo
 * () -> true
 * ('a','l','a') -> true
 * ('a','l','l','a') -> true
 * ('h','a','l','l','a') -> false
 */
export function palindromo(chars: string[]): boolean {
  return false;
}
