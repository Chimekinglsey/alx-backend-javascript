import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}

// export default function handleProfileSignup(firsName, lastName, fileName) {
//   return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
//     .then((result) => {
//       for (let func of result) {
//         if (func.value !== 'fulfilled') {
//           func.value = func.reason
//             [
//               {
//                 status: func.status,
//                 value: func.value,
//               }
//             ];
//         }
//       }
//     });
// }
