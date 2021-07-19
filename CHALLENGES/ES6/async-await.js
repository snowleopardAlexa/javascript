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

// Incorporating fetch with async/await
const githubRequest = async (login) => {
    let response = await fetch(`https://api.github.com/users/${login}`
    );
    let json = await response.json();
    let summary = `${json.name}, ${json.company}`;
    console.log(summary);
};

githubRequest("alexaslomski")