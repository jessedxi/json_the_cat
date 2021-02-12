const request = require('request');
//const url = process.argv[2];
const baseUrl = 'https://api.thecatapi.com/v1/breeds/search/?q=';


const fetchBreedDescription = function (breedName, callback) {
  if (!callback) {
    console.log('Error, please provide callback');
    return;
  }
  
  if (!breedName) {
    callback(`Name may not be undefined`, null);
    return;
  }
 
  const url = baseUrl + breedName;

  request((url), (error, response, body) => {


    if (error !== null) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    if (!data[0]) {
      callback('Breed not found', null);
      return;
    }

    let description = data[0].description;
    callback(null, description);
  });

};

//breedFetcher(url);

module.exports = { fetchBreedDescription };