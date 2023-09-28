export default function signUpUser(firstName, lastName) {
  return Promise((res) => {
    res({ firstName, lastName });
  });
}
