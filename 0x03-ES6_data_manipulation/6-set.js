export default function setFromArray(array) {
  if (!Array.isArray(array)) throw TypeError('Only an array is allowed');
  return new Set(array);
}
