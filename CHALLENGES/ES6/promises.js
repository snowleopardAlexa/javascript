// PROMISES

// promise 
const delay = (seconds) =>
  new Promise((resolve, reject) => {
      if (typeof seconds !== "number") {
          reject (
              new Error("seconds must be a number!")
          );
      }

    setTimeout(resolve, seconds * 1000);
  });

  console.log("zero seconds");
  delay(1).then(() => console.log("1 sec"));
  delay(5).then(() => console.log("5 secs"));

  // Loading remote data with promises
  const spacePeople = () => {
      return new Promise((resolves, rejects) => {
          const api = "http://api.open-notify.org/astro.json";
          const request = new XMLHttpRequest();
          request.open("GET", api);
          request.onload = () => {
              if (request.status === 200) {
                  resolves(JSON.parse(request.response));
              } else {
                  rejects(Error(request.statusText));
              }
          }; 
          request.oneerror = (err) => rejects(err);
          request.send();
      });
  };

  spacePeople().then(
      (spaceData) => console.log(spaceData),
      (err) => 
        console.error(new Error("Can't load people"))
  );

  // Returning promises with fetch
  // fetch is used to avoid writing long https requests
  // fetch is built inside the browser
  let getSpacePeople = () => 
  fetch(
      "http://api.open-notify.org/astros.json"
  ).then((res) => res.json());

  let spaceNames = () =>
    getSpacePeople() 
      .then((json) => json.people)
      .then((people) => people.map((p) => p.name))
      .then((names) => names.join(", "));

  spaceNames().then(console.log);    