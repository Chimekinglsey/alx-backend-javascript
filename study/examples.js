
const THRESHOLD_A = 8;
function tetheredGetNumber(resolve, reject) {
    // return new Promise((resolve, reject) => {
        setTimeout(() => {
          const randomInt = Date.now();
          const value = randomInt % 10;
          if (value < THRESHOLD_A) {
            resolve(value);
          } else {
            reject(`Too large: ${value}`);
          }
        }, 500);
    // })
  }
//   tetheredGetNumber()
//   .then((val)=>{
//     console.log(val)
//   })

  //check parity
    function determineParity(value) {
        const isOdd = value % 2 === 1;
        return { value, isOdd };
    }
    console.log(determineParity(7))

//
function troubleWithGetNumber(reason) {
    const err = new Error("Trouble getting number", { cause: reason });
    console.error(err);
    throw err;
  }
  
function troubleWithGetNumber(reason) {
    const err = new Error("Trouble getting number", { cause: reason });
    console.error(err);
    throw err;
  }
  
  function promiseGetWord(parityInfo) {
    return new Promise((resolve, reject) => {
      const { value, isOdd } = parityInfo;
      if (value >= THRESHOLD_A - 1) {
        reject(`Still too large: ${value}`);
      } else {
        parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
        resolve(parityInfo);
      }
    });
  }
  new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));
  