export type ListItem<T> = {
  head: T;
  tail: List<T>;
}

export type List<T> = ListItem<T> | null;

export function add<T>(head: T, tail: List<T>): List<T> {
  return { head, tail };
}

export function isEmpty<T>(list: List<T>): list is null {
  return list === null;
}

export function head<T>(list: List<T>): T {
  if (isEmpty(list)) {
    throw new Error('Empty list');
  }
  return list.head;
}

export function tail<T>(list: List<T>): List<T> {
  if (isEmpty(list)) {
    throw new Error('Empty list');
  }
  return list.tail;
}

export function list<T>(...elements: T[]): List<T> {
  if (elements.length === 0) {
    return null;
  }
  const [head, ...tail] = elements;
  return add(head, list(...tail));
}
