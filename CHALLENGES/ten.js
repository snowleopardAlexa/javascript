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

  

