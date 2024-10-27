import * as practica from './practica'
import { list } from './List'

describe('Practica 2', () => {
  test('exists', () => {
    expect(practica.exists(list(1, 2, 3), 2)).toBe(true)
    expect(practica.exists(list(1, 2, 3), 4)).toBe(false)
  })

  test('at', () => {
    expect(practica.at(list(1, 2, 3), 1)).toBe(2)
    expect(practica.at(list(1, 2, 3), 2)).toBe(3)
    expect(() => practica.at(list(1, 2, 3), 3)).toThrow()
  })

  test('max', () => {
    expect(practica.max(list(1, 2, 3))).toBe(3)
    expect(practica.max(list(3, 2, 1))).toBe(3)
  })

  test('min', () => {
    expect(practica.min(list(1, 2, 3))).toBe(1)
    expect(practica.min(list(3, 2, 1))).toBe(1)
  })

  test('count', () => {
    expect(practica.count(list(1, 2, 3))).toBe(3)
    expect(practica.count(list(3, 2, 1, 0, -1))).toBe(5)
    expect(practica.count(list())).toBe(0)
  })

  test('areEqual', () => {
    expect(practica.areEqual(list(1, 2, 3), list(1, 2, 3))).toBe(true)
    expect(practica.areEqual(list(1, 2, 3), list(3, 2, 1))).toBe(false)
    expect(practica.areEqual(list(1, 2, 3), list(1, 2, 3, 4))).toBe(false)
  })

  test('toString', () => {
    expect(practica.toString(list(1, 2, 3))).toBe('1, 2, 3')
    expect(practica.toString(list(3, 2, 1))).toBe('3, 2, 1')
    expect(practica.toString(list())).toBe('')
  })

  test('onlyEvens', () => {
    expect(practica.onlyEvens(list(1, 2, 3, 4, 5))).toEqual(list(2, 4))
    expect(practica.onlyEvens(list(1, 3, 5))).toEqual(list())
  })

  test('onlyMultiplesOf3', () => {
    expect(practica.onlyMultiplesOf3(list(1, 2, 3, 4, 5, 6))).toEqual(list(3, 6))
    expect(practica.onlyMultiplesOf3(list(1, 2, 4))).toEqual(list())
  })

  test('filter', () => {
    expect(practica.filter(list(1, 2, 3, 4, 5), n => n % 2 === 0)).toEqual(list(2, 4))
    expect(practica.filter(list(1, 2, 3, 4, 5), n => n % 2 !== 0)).toEqual(list(1, 3, 5))
  })

  test('accumulateItems', () => {
    expect(practica.accumulateItems(list(1, 2, 3, 4, 5))).toBe(15)
    expect(practica.accumulateItems(list(3, 2, 1))).toBe(6)
  })

  test('accumulateDouble', () => {
    expect(practica.accumulateDouble(list(1, 2, 3, 4, 5))).toBe(30)
    expect(practica.accumulateDouble(list(3, 2, 1))).toBe(12)
  })

  test('accumulateSquare', () => {
    expect(practica.accumulateSquare(list(1, 2, 3, 4, 5))).toBe(55)
    expect(practica.accumulateSquare(list(3, 2, 1))).toBe(14)
  })

  test('accumulate', () => {
    expect(practica.accumulate(list(1, 2, 3, 4, 5), n => n)).toBe(15)
    expect(practica.accumulate(list(1, 2, 3, 4, 5), n => n * 2)).toBe(30)
    expect(practica.accumulate(list(1, 2, 3, 4, 5), n => n * n)).toBe(55)
  })

  test('transform', () => {
    expect(practica.transform(list(1, 2, 3), n => n * 2)).toEqual(list(2, 4, 6))
    expect(practica.transform(list(1, 2, 3), n => n * n)).toEqual(list(1, 4, 9))
  })

  test('join', () => {
    expect(practica.join(list(1, 2, 3), list(4, 5, 6))).toEqual(list(1, 2, 3, 4, 5, 6))
    expect(practica.join(list(1, 2, 3), list())).toEqual(list(1, 2, 3))
    expect(practica.join(list(), list(4, 5, 6))).toEqual(list(4, 5, 6))
  })

  test('union', () => {
    expect(practica.union(list(1, 2, 3), list(4, 5, 6))).toEqual(list(1, 2, 3, 4, 5, 6))
    expect(practica.union(list(1, 2, 3), list(3, 4, 5))).toEqual(list(1, 2, 3, 4, 5))
  })

  test('intersection', () => {
    expect(practica.intersection(list(1, 2, 3), list(2, 3, 4))).toEqual(list(2, 3))
    expect(practica.intersection(list(1, 2, 3), list(4, 5, 6))).toEqual(list())
  })

  test('median', () => {
    expect(() => practica.median(list())).toThrow()
    expect(practica.median(list(1, 2, 3, 4, 5))).toBe(3)
    expect(practica.median(list(1, 2, 3, 4, 5, 6))).toBe(3)
  })

  test('getBiggerOrEqualElements', () => {
    expect(practica.getBiggerOrEqualElements(list(1, 2, 3, 4, 5), 3)).toEqual(list(3, 4, 5))
    expect(practica.getBiggerOrEqualElements(list(1, 2, 3, 4, 5), 6)).toEqual(list())
  })

  test('getSmallerElements', () => {
    expect(practica.getSmallerElements(list(1, 2, 3, 4, 5), 3)).toEqual(list(1, 2))
    expect(practica.getSmallerElements(list(1, 2, 3, 4, 5), 1)).toEqual(list())
  })

  test('quickSort', () => {
    expect(practica.quickSort(list(3, 2, 1))).toEqual(list(1, 2, 3))
    expect(practica.quickSort(list(1, 2, 3))).toEqual(list(1, 2, 3))
    expect(practica.quickSort(list(4, 7, 10, 12, 3, 8))).toEqual(list(3, 4, 7, 8, 10, 12))
  })

  test.skip('getAllSubsets', () => {
    expect(practica.count(practica.getAllSubsets(list(1, 2, 3)))).toBe(8)
  })
})