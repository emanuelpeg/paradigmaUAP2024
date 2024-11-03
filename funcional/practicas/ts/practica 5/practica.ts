// Function type definition
type Func<T, R> = (arg: T) => R;

export function compose<T, R extends any>(...fns: Func<any, any>[]): Func<T, R> {
  return (arg: T) => fns.reduceRight((acc, fn) => fn(acc), arg) as unknown as R;
}

export function pipe<T, R extends any>(...fns: Func<any, any>[]): Func<T, R> {
  return (arg: T) => fns.reduce((acc, fn) => fn(acc), arg) as unknown as R;
}

// Type definitions for our data structure
export type User = {
  name: string;
  address: Address;
};

export type Address = {
  street: string;
  city: string;
};

// Lens type definition
type Lens<T extends Record<string, any>, U extends any> = {
  get: (obj: T) => U;
  set: (obj: T) => (value: U) => T;
};

const fieldLensGenerator = <T extends Record<string, any>, K extends keyof T = keyof T, U = T[K]>(field: K): Lens<T, U> => ({
  get: (obj: T) => obj[field],
  set: (obj: T) => (value: U) => ({ ...obj, [field]: value }),
});

// Creating a lens for the `address` property
// const addressLens: Lens<User, Address> = {
//   get: (user) => user.address,
//   set: (address) => (user) => ({ ...user, address }),
// };
const addressLens = fieldLensGenerator<User, 'address'>('address');

// Creating a lens for the `city` property
// const cityLens: Lens<Address, string> = {
//   get: (address) => address.city,
//   set: (city) => (address) => ({ ...address, city }),
// };
const cityLens = fieldLensGenerator<Address>('city');

export const distribute = <D, Src, R>(...fns: Func<D, any>[]) => (arg: D) => compose<Src, R>(...fns.map(fn => fn(arg)));
// Composing lenses to focus on the `city` property of a `User`
export const cityLensForUser: Lens<User, string> = {
  get: pipe(addressLens.get, cityLens.get),
  set: distribute<User, string, User>(
      addressLens.set,
      compose<User, (c: string) => Address>(cityLens.set, addressLens.get)
    )
};

export const genericLens = <Src extends Record<string, any>, Value = any>(path: string[] | string): Lens<Src, Value> => {
  if (typeof path === 'string') {
    path = path.split('.');
  }

  const lenses = path.map(field => fieldLensGenerator(field));

  return ({
    get: pipe<Src, Value>(...lenses.map(l => l.get)),
    set: distribute<Src, Value, Src>(
      ...lenses.map((lens, index) => {
        const tail = lenses.slice(0, index).map((l, i) => i === 0 ? l.get : l.set)
        return compose(lens.set, ...tail)
      })
    ),
    // set: (obj: Src) => (value: Value) => {
    //   return path.reduceRight((acc: any, field, index) => {
    //     const o = genericLens<Src, any>(path.slice(0, index)).get(obj);
    //     return fieldLensGenerator(field).set(o)(acc);
    //   }, value);
    // },
    // set: (obj: Src) => (value: Value): Src => {
    //   const [head, ...tail] = path
    //   const lens = fieldLensGenerator<Src, any>(head);
    //   if (tail.length === 0) {
    //     return lens.set(obj)(value);
    //   }
    //   const tailLens = pipe<Src, Func<Value, Src>>(lens.get, genericLens(tail).set)(obj)
    //   return pipe<Value, Src>(tailLens, lens.set(obj))(value);
    // }
  })
}