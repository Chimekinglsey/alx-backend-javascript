// append handlers
export default async function handleResponseFromAPI(promise) {
    const obj = {
      status: 200,
      body: 'Success',
    };
    return promise
    .then(() => obj)
    .catch((error)=> new Error())
    .finally(()=>console.log('Got a response from the API'))

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
