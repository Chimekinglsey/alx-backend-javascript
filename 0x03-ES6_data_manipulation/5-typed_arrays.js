// Create a function named createInt8TypedArray that accepts three numbers: length,
// position, and value.
const createInt8TypedArray = (length, position, value) => {
  // Check if length, position, and value are numbers. If not, throw a TypeError.
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw TypeError('Length, Position, and Value must be a number');
  }

  // Check if the position is within the valid range.
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with a specified length to store binary data.
  const Int8buffer = new ArrayBuffer(length);

  // Create an Int8Array view on the ArrayBuffer, which allows you to work with
  // 8-bit signed integers.
  const Int8view = new Int8Array(Int8buffer);

  // Set the value at the specified position in the Int8Array.
  Int8view[position] = value;

  // Return a DataView created from the ArrayBuffer, which provides a structured
  // view of the binary data.
  return new DataView(Int8buffer);
};

// Export the createInt8TypedArray function as the default export of this module.
export default createInt8TypedArray;
