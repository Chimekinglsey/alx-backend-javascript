const hasValuesFromArray = (set, array) => {
  if (!Array.isArray(array) || !(set instanceof Set)) throw TypeError('Input must be an Array and a Set');
  const result = array.every((element) => set.has(element));
  return result;
};
export default hasValuesFromArray;
