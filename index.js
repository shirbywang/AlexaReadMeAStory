const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const googleAPIs = require('googleapis');
const axios = require('axios');
const $ = require('jquery');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const imageFile = "http://i.imgur.com/y8ha1ld.jpg";
	const url = 'https://www.wolframcloud.com/objects/902ee9ce-e012-44b7-b1c5-444f56fd0d95/?name='+imageFile;
	axios.post(url)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(200).send("ERROR");
		});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('It works!');
});

