// append handlers
export default function handleResponseFromAPI(promise) {
//   const obj = {
//     status: 200,
//     body: 'Success',
//   };
  return promise
    .then(() => {
      const obj = { status: 200, body: 'Success' };
      return obj;
    })// bracketed obj because
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
  // commented out async to test this
  //   try {
  //     const result = await promise;

//     console.log(result)
//     return obj;
//   } catch (error) {
//     return (Error(''));
//   } finally {
//     console.log('Got a response from the API');
//   }
}
