const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const googleAPIs = require('googleapis');
const axios = require('axios');
const $ = require('jquery');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	readFromImage("http://i.imgur.com/y8ha1ld.jpg");
  res.status(200).send('Hello World!');
});

app.post('/', (req, res) => {
  //const { Body, From, MediaUrl0 } = req.body;
  //const message = { body: Body, from: From, img: MediaUrl0 }
  res.send(`
    <Response>
      <Message>Thanks for texting!</Message>
    </Response>
  `);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('It works!');
});


function readFromImage(imageFile){

	axios.post('https://www.wolframcloud.com/objects/8f903053-9f4c-4200-8c8b-ee40d88765d3/?name='+imageFile)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

