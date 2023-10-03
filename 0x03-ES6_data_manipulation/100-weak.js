export const weakMap = new WeakMap();

let counter = 1;
export function queryAPI(endpoint) {
  function count() {
    counter += 1;
    return counter;
  }
  if (counter >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, count());
}
