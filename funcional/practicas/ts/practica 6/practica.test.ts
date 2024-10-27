import { everythingIsOnFire, thisIsFine, VamoACalmarno } from './practica'

describe('practica 5', () => {
  test('thisIsFine works', () => {
    const fine = thisIsFine(1)
    expect(fine.isFine()).toBe(true)
    expect(fine.isOnFire()).toBe(false)
    fine.tap((v) => expect(v).toBe(1))
  })

  test('everythingIsOnFire works', () => {
    const fire = everythingIsOnFire('on fire')
    expect(fire.isFine()).toBe(false)
    expect(fire.isOnFire()).toBe(true)

    const fn = jest.fn()
    fire.tap(fn)
    fire.map(fn)
    expect(fn).not.toHaveBeenCalled()
  })

  test('flatMap works', () => {
    const fine = thisIsFine(1)
    const fire = everythingIsOnFire('on fire')

    const fine2 = fine.flatMap((v) => thisIsFine(v + 1))
    expect(fine2.isFine()).toBe(true)
    expect(fine2.isOnFire()).toBe(false)
    fine2.tap((v) => expect(v).toBe(2))

    const fire2 = fire.flatMap((v) => thisIsFine(v + 1))
    expect(fire2.isFine()).toBe(false)
    expect(fire2.isOnFire()).toBe(true)
    fire2.tap((v) => expect(v).toBe('on fire'))
  })

  test('map works', () => {
    const fine = thisIsFine(1)
    const fire = everythingIsOnFire('on fire')

    const fine2 = fine.map((v) => v + 1)
    expect(fine2.isFine()).toBe(true)
    expect(fine2.isOnFire()).toBe(false)
    fine2.tap((v) => expect(v).toBe(2))

    const fire2 = fire.map((v) => v + 1)
    expect(fire2.isFine()).toBe(false)
    expect(fire2.isOnFire()).toBe(true)
    fire2.tap((v) => expect(v).toBe('on fire'))
  })

  test('recover works', () => {
    const fine = thisIsFine(1)
    const fire = everythingIsOnFire('on fire')

    const fine2 = fine.recover((e) => thisIsFine(e))
    expect(fine2.isFine()).toBe(true)
    expect(fine2.isOnFire()).toBe(false)
    fine2.tap((v) => expect(v).toBe(1))

    const fire2 = fire.recover((e) => thisIsFine(e))
    expect(fire2.isFine()).toBe(true)
    expect(fire2.isOnFire()).toBe(false)
    fire2.tap((v) => expect(v).toBe('on fire'))
  })

  test('Symbol.iterator works', () => {
    const fine = thisIsFine(1)
    const fire = everythingIsOnFire('on fire')

    for (const v of fine) {
      expect(v).toBe(1)
    }
    const fn = jest.fn()
    for (const v of fire) {
      fn(v)
    }
    expect(fn).not.toHaveBeenCalled()
  })

  test('can define a function that returns a fine or fire', () => {
    const division = (a: number, b: number): VamoACalmarno<number, string> => {
      if (b === 0) {
        return everythingIsOnFire('Division by zero');
      }
      return thisIsFine(a / b);
    }
    const div = division(1000, 0)
      .flatMap(x => division(x, 2))
      .recover(() => thisIsFine(Infinity))
      .map(x => `Result: ${x}`)

    div.tap(v => expect(v).toBe('Result: Infinity'))

    const div2 = division(1000, 2)
      .flatMap(x => division(x, 2))
      .recover(() => thisIsFine(Infinity))
      .map(x => `Result: ${x}`)

    div2.tap(v => expect(v).toBe('Result: 250'))

    const div3 = division(1000, 2)
      .flatMap(x => division(x, 0))
      .map(x => `Result: ${x}`)

    const fn = jest.fn()
    div3.tap(fn)
    expect(fn).not.toHaveBeenCalled()
  })
})