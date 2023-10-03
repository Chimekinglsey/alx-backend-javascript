// Create a WeakMap to store the number of times each endpoint is queried
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object') throw new Error('Endpoint must be an object');
  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
