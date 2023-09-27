Promises is a new object introduced in ECMASCRIPT6 (ES6) to mitigate the potential drawback of call back functions known as call-back-hell or pyramid of doom.
Promises provides a way of handling the execution of codes asynchronously.
A promise takes a function with two params, `resolve` and `reject` that returns  the state of the promise and consequential data (or error in cases of rejection).

The Async/await introduced in ES7 provides a cleaner way of dealing with promises and asynchronous functions. It preceeds a function with `async` in which the `await` keyword can be used. a variable is used to store the data returned by an async function. await always works only within an async function or a thenable.
Instead of continuously calling the `.then()`, async functions use `try/catch` to run commands asynchronously leading to a better and cleaner codebase