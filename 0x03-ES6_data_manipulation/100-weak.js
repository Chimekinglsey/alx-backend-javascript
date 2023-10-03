// Create a WeakMap to store the number of times each endpoint is queried
export const weakMap = new WeakMap();

// Define a function to query the API and track usage for each endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If the endpoint is in the WeakMap, retrieve the current count
    const count = weakMap.get(endpoint);

    // Check if the count has reached the limit of 5
    if (count >= 5) {
      // If it has, throw an error indicating high endpoint load
      throw new Error('Endpoint load is high');
    }

    // Increment the count for the endpoint
    weakMap.set(endpoint, count + 1);
  }
}
