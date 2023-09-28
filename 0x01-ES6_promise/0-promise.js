// return a promise: console.log(response instanceof Promise);
function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve(true);
  });
}

getResponseFromAPI();
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
