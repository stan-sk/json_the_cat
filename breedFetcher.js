const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);

    try {
      callback(null, data[0].description);
    } catch (error) {
      error = "Breed not found or no description available.";
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };

