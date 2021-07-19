// ASYNC/AWAIT keyword

// promise with await
// await is only valid in async function
const delay = (seconds) =>
  new Promise((resolves) =>
   setTimeout(resolves, seconds * 1000)
);

const countToFive = async() => {
    console.log("zero seconds");
    await delay(1);
    console.log("one second");
    await delay(2);
    console.log("two seconds");
    await delay(3);
    console.log("three seconds");
};

countToFive();

