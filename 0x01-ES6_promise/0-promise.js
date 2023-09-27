// return a promise: console.log(response instanceof Promise);
function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve(true);
  });
}
// testing the funtion so jest can let me go
describe('getResponseFromAPI', () => {
  it('should resolve with a URL', async () => {
    expect.assertions(1);
    // No need for 'return' here
    const response = await getResponseFromAPI();
    expect(response).toBe(true);
  });
});

// getResponseFromAPI()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
