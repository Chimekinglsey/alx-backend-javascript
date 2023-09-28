export default function signUpUser(firstName, lastName) {
  return new Promise((res) => {
    res({
      Promise: {
        firstName,
        lastName,
      },
    });
  });
}
