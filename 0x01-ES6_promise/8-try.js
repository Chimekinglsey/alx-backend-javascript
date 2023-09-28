export default function divideFunction(numerator, denominator) {
  if (isNaN(numerator) || isNaN(denominator)) {
    throw new Error('Enter only numbers');
  } else
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
