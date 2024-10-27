export type VamoACalmarno<T, E> = ThisIsFine<T, E> | EverythingIsOnFire<T, E>
export type InferFineTypes<R> = R extends VamoACalmarno<infer T, unknown> ? T : never
export type InferFireTypes<R> = R extends VamoACalmarno<unknown, infer E> ? E : never

export const thisIsFine = <T, E = never>(value: T): ThisIsFine<T, E> => new ThisIsFine(value)

export function everythingIsOnFire<T = never, E extends string = string>(err: E): EverythingIsOnFire<T, E>
export function everythingIsOnFire<T = never, E = unknown>(err: E): EverythingIsOnFire<T, E>
export function everythingIsOnFire<T = never, E = unknown>(err: E): EverythingIsOnFire<T, E> {
  return new EverythingIsOnFire(err)
}

interface IVamoACalmarno<T, E> {
  isFine(): this is ThisIsFine<T, E>;
  isOnFire(): this is EverythingIsOnFire<T, E>;

  map<A>(f: (t: T) => A): VamoACalmarno<A, E>;
  tap(f: (t: T) => void): VamoACalmarno<T, E>;

  flatMap<R extends VamoACalmarno<unknown, unknown>>(
    f: (t: T) => R,
  ): VamoACalmarno<InferFineTypes<R>, InferFireTypes<R> | E>
  flatMap<U, F>(f: (t: T) => VamoACalmarno<U, F>): VamoACalmarno<U, E | F>
  flatMap<U>(f: (t: T) => U): VamoACalmarno<U, E>

  recover<R extends VamoACalmarno<unknown, unknown>>(
    f: (e: E) => R,
  ): VamoACalmarno<InferFineTypes<R> | T, InferFireTypes<R>>
  recover<U, A>(f: (e: E) => VamoACalmarno<U, A>): VamoACalmarno<U | T, A>
}

export class ThisIsFine<T, E> implements IVamoACalmarno<T, E> {
  constructor(readonly value: T) { }

  isFine(): this is ThisIsFine<T, E> {}

  isOnFire(): this is EverythingIsOnFire<T, E> {}

  flatMap<R extends VamoACalmarno<unknown, unknown>>(
    f: (t: T) => R,
  ): VamoACalmarno<InferFineTypes<R>, InferFireTypes<R> | E>
  flatMap<U, F>(f: (t: T) => VamoACalmarno<U, F>): VamoACalmarno<U, E | F>
  flatMap<U>(f: (t: T) => U): VamoACalmarno<U, E>
  flatMap(f: any): any {}

  map<A>(f: (t: T) => A): VamoACalmarno<A, E> {}

  tap(f: (t: T) => void): VamoACalmarno<T, E> {}

  recover<R extends VamoACalmarno<unknown, unknown>>(
    _f: (e: E) => R,
  ): VamoACalmarno<InferFineTypes<R> | T, InferFireTypes<R>>
  recover<U, A>(f: (e: E) => VamoACalmarno<U, A>): VamoACalmarno<U | T, A> {}

  *[Symbol.iterator](): Generator<T, T> {
    yield this.value
    return this.value
  }
}

export class EverythingIsOnFire<T, E> implements IVamoACalmarno<T, E> {
  constructor(readonly error: E) { }

  isFine(): this is ThisIsFine<T, E> {}

  isOnFire(): this is EverythingIsOnFire<T, E> {}

  flatMap<R extends VamoACalmarno<unknown, unknown>>(
    _f: (t: T) => R,
  ): VamoACalmarno<InferFineTypes<R>, InferFireTypes<R> | E>
  flatMap<U, F>(_f: (t: T) => VamoACalmarno<U, F>): VamoACalmarno<U, E | F>
  flatMap<U>(f: (t: T) => U): VamoACalmarno<U, E>
  flatMap(_f: any): any {}

  map<A>(_f: (t: T) => A): VamoACalmarno<A, E> {}

  tap(_f: (t: T) => void): VamoACalmarno<T, E> {}

  recover<R extends VamoACalmarno<unknown, unknown>>(
    f: (e: E) => R,
  ): VamoACalmarno<InferFineTypes<R> | T, InferFireTypes<R>>
  recover<U, A>(f: (e: E) => VamoACalmarno<U, A>): VamoACalmarno<U | T, A> {}

  *[Symbol.iterator](): Generator<EverythingIsOnFire<never, E>, T> {
    // @ts-expect-error -- This is structurally equivalent and safe
    return this
  }
}

export function vamoACalmarno<T, E>(value: T): ThisIsFine<T, E> {
  return thisIsFine(value)
}
