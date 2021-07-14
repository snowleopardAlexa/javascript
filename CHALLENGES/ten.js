// ASYNCHRONOUS vs SYNCHRONOUS

// Synchronous steps:
// we move step by step, a step five doesn't 
// run until a step three if finished

// Asynchronous steps:
// steps can run at the same time
// with the results that some steps come later
// other steps can happen while other steps take more time to
// do something
// over the wire

// callbacks, promises, async, and await
/**
 * Callbacks
 */

// with one is simple enough
jQuery.get("https://google.com/get?data=1", function(response) {
    // now I have some data
});

// nested callback
   jQuery.get("https://google.com/get?data=1", function(response) {
    // now I have some data

    jQuery.get("https://google.com/get?data=1", function(response) {
    // now I have some data

    jQuery.get("https://google.com/get?data=1", function(response) {
        // now I have some data
   });  
  });
});

/**
 * Promises
 */

// one promise
axios.get("https://httpbin.org/get").then(function(response) {
    // now I have some data
});

// multiple promises in sequence, no nesting
axios
  .get("https://httpbin.org/get")
  .then(function(response) {
      // now I have some data
      return axios.get("http://httpbin.org/get");
  })
  .then(function(response) {
      // now I have some data

      return axios.get("https://httpbin.org/get");
  });

  /**
   * Async / Await
   */

  // one request
  async function getOneThing() {
      var response = await axios.get("https://httpbin.org/get");
      // now I have some data
  }

  // multiple requests
  async function getLotsOfThings() {
      var response1 = await axios.get("https://httpbin.org/get");
      var response2 = await axios.get("https://httpbin.org/get");
      var response3 = await axios.get("https://httpbin.org/get");

      // Now I have some data
  }

  /**
   * Object-Oriented JavaScript 
   * prototypes and classes
   */
  // protype chain --> 
  Cookie.prototype.bake = function(temp, minutes) {
      // bake a cake at a particular temperature
      // for a number of minutes
  }

// Loosely vs strongly typed language
// Loosely typed: flexible - JS
// Strongly type: strict 
// TypeScript: JS + strongly typed 
// Moden JS Tools:
// --> webpack, rollup.js






