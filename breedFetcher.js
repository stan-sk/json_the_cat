const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  const data = JSON.parse(body);
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  try {
    console.log(data[0].description);
  } catch (error) {
    console.log("There was an error", error.name);
  }
  // console.log(data);
  // console.log(typeof data);

});


