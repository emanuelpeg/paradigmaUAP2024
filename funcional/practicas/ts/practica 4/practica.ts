import * as List from './List';

export function fold<T, U>(
  list: List.List<T>,
  fx: (acc: U, item: T, index: number) => U,
  init: U): U {
  return init;
}

export function reverse<T>(list: List.List<T>): List.List<T> {
  return null;
}

export function foldRight<T, U>(
  list: List.List<T>,
  fx: (acc: U, item: T, index: number) => U,
  init: U): U {
  return init;
}


export function filter(list: List.List<number>, fx: (n: number) => boolean): List.List<number> {
  return null;
}

export function map<T, U>(list: List.List<T>, fx: (elem: T) => U): List.List<U> {
  return null
}


// Indica si un elemento esta contenido o no dentro de la lista
export function exists(list: List.List<number>, n: number): boolean {
  return false
}


// Busca el elemento ubicado en la posicion indicada
export function at(list: List.List<number>, index: number): number {
  return 0
}

// Busca el elemento mas grande de la lista
export function max(list: List.List<number>): number {
  return Number.MIN_SAFE_INTEGER;
}

// Busca el elemento mas chico de la lista
export function min(list: List.List<number>): number {
  return Number.MAX_SAFE_INTEGER;
}

// Cuenta la cantidad de elementos de la lista
export function count<T>(list: List.List<T>): number {
  return fold(list, (acc) => acc + 1, 0)
}

// Indica si 2 listas son iguales
export function areEqual(firstList: List.List<number>, secondList: List.List<number>): boolean {
  return false;
}

// Devuelve una representacion en string de la lista
export function toString(list: List.List<number>): string {
  return '';
}

// Devuelve una lista donde solo los elementos pares de la lista original estan presente
export function onlyEvens(list: List.List<number>): List.List<number> {
  return null;
}

// Devuelve una lista donde solo los elementos multiplos de 3 de la lista original estan presente
export function onlyMultiplesOf3(list: List.List<number>): List.List<number> {
  return null;
}

// Devuelve la suma de los numeros en la lista
export function accumulateItems(list: List.List<number>): number {
  return 0;
}

// Devuelve la suma de el doble de los elementos de la lista
export function accumulateDouble(list: List.List<number>): number {
  return 0;
}

// Devuelve la suma de el cuadrado de los elementos de la lista
export function accumulateSquare(list: List.List<number>): number {
  return 0;
}

// Dada una lista y una funcion de transformacion, devuelve la suma del retorno de la funcion para cada elemento de la lista
export function accumulate(list: List.List<number>, fx: (n: number) => number): number {
  return 0;
}


// Dada una lista y una funcion de transformacion, devuelve una lista con el retorno de la funcion para cada elemento de la lista
export function transform<T>(list: List.List<number>, fx: (n: number) => T): List.List<T> {
  return null;
}

// Une las dos listas, una despues de la otra
export function join(firstList: List.List<number>, secondList: List.List<number>): List.List<number> {
  return null;
}


// Une las dos listas, eliminando elementos repetidos
export function joinSets(firstList: List.List<number>, secondList: List.List<number>): List.List<number> {
  return null;
}

// Devuelve los elementos que se encuentran en ambas listas
export function intersection(firstList: List.List<number>, secondList: List.List<number>): List.List<number> {
  return null;
}

/*
* Busca la mediana
* En el ámbito de la estadística, la mediana representa el
* valor de la variable de posición central en un conjunto de datos ordenados.
* Si la cantidad de elementos es par, devuelve el primero de los dos elementos centrales.
*/
export function median(list: List.List<number>): number {
  return 0;
}

// Devuelve los elementos de una lista que son mayores o iguales que un parametro 
export function getBiggerOrEqualElements(list: List.List<number>, n: number): List.List<number> {
  return null;
}

// Devuelve los elementos de una lista que son menores que un parametro
export function getSmallerElements(list: List.List<number>, n: number): List.List<number> {
  return null;
}

// Ordene los elementos de la lista usando el algoritmo QuickSort
export function quickSort(list: List.List<number>): List.List<number> {
  return null;
}

/*************************** 
 * Opcional
 * Dada una lista de enteros retorna una lista con todas las posibles subconjuntos
 * Por ejemplo : (1,2,3) -> ((),(1),(2),(3),(1,2),(1,3), (1,2,3), (2,3))
*/
export function getAllSubsets(list: List.List<number>): List.List<List.List<number>> {
  return null;
}
