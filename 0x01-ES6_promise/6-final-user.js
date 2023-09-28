import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firsName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firsName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      for (const func of result) {
        if (func.value !== 'fulfilled') {
          func.value = func.reason
            [
              {
                status: func.status,
                value: func.value,
              }
            ];
        }
      }
    });
}
