// retrieves functions what return promises and display their data
import { uploadPhoto, createUser } from './utils';

const { firstName, lastName } = createUser;
const { body } = uploadPhoto;
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto, createUser])
    .then(() => console.log(`${body} ${firstName} ${lastName}`))
    .catch(() => console.log('Signup system offline'));
}
