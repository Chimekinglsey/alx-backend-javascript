// append handlers
export default async function handleResponseFromAPI(promise) {
  try {
    const result = await promise;

    const obj = {
      status: 200,
      body: 'Success',
    };
    return obj;
  } catch (error) {
    return (Error(''));
  } finally {
    console.log('Got a response from the API');
  }
}
