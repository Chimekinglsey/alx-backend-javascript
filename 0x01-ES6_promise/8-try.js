// divider function
export default function divideFunction(numerator, denominator) {
  if (numerator.isNaN() || denominator.isNaN()) throw Error('Enter only numbers');
  else if (denominator === 0) throw Error('cannot divide by 0');
  else return (numerator / denominator);
}
