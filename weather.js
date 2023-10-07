require('dotenv').config({ path: './keys.env' }) 
const https = require('https');
const fs = require('fs');

const url = process.env.WEATHER_KEY;

https.get(url, (response) => {
  // Check if the response status is OK (200)
  if (response.statusCode === 200) {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      // Save the data to a local file
      fs.writeFile('weather_data.csv', data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('CSV file saved as weather_data.csv');
        }
      });
    });
  } else {
    console.error('Network response was not ok');
  }
}).on('error', (err) => {
  console.error(err);
});
