const request = require('request');
//const fs = require('fs');
const url = process.argv[2];
const query = process.argv[3];

const breedFetcher = function(url, query) {
  if (url === undefined) {
    console.log(`URL may bot be undefined`);
  }

  if (url !== undefined) {
    request((url + query), (error, response, body) => {


      if (error !== null) {
        console.log(`Error: host invalid`);
        console.log('Error:', error);
        process.exit();
      }

      const data = JSON.parse(body);

      if (data[0] !== undefined) {
        let description = data[0].description;
        console.log(`Respone:`, response.statusCode);
        //console.log(data);
        console.log(description);
      } else {
        console.log('Breed not found!');
      }

    });
  }
};

breedFetcher(url, query);