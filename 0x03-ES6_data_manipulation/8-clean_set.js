export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || !set || !startString) return '';
  const matches = [];
  set.forEach((key) => {
    if (typeof key === 'string' && key.startsWith(startString) && startString.length > 0) {
      // substring(remove) removes the startString and appends the rest
      matches.push(key.substring(startString.length));
    }
  });

  const result = matches.join('-');
  return result;
}
