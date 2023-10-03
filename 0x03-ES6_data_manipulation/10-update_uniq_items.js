export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  // for(const [key,val] of map)
  for (const [key, val] of map) {
    if (val === 1) {
    // modify the map directly, no need to return anything
      map.set(key, 100);
    } else map.set(key, val);
  }
}
