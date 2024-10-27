// Function type definition
type Func<T, R> = (arg: T) => R;

// Compose function
export function compose<T, R extends any>(...fns: Func<any, any>[]): Func<T, R> {
}

export function pipe<T, R extends any>(...fns: Func<any, any>[]): Func<T, R> {
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
  get: null,
  set: null
};

export const genericLens = <Src extends Record<string, any>, Value = any>(path: string[] | string): Lens<Src, Value> => {
  if (typeof path === 'string') {
    path = path.split('.');
  }

  return ({
    get: null,
    set: null
  })
}