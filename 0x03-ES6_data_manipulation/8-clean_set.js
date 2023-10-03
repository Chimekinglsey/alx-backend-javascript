export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') throw new TypeError('set must be an instance of a Set. startString must be a string');

  const matches = [];
  set.forEach((key) => {
    if (key.startsWith(startString) && startString.length > 0) {
      // substring(remove) removes the startString and appends the rest
      matches.push(key.substring(startString.length));
    }
  });

  const result = matches.join('-');
  return result;
}
