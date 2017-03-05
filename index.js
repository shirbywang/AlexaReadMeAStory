const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const googleAPIs = require('googleapis');
const axios = require('axios');
const $ = require('jquery');
theRealStory = "";
imagelink = "";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("DNE");
  const testImage = "http://i.imgur.com/y8ha1ld.jpg";
	const url = 'https://www.wolframcloud.com/objects/902ee9ce-e012-44b7-b1c5-444f56fd0d95/?name='+imagelink;
	axios.post(url)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(200).send("ERROR");
		});
});

app.post('/', (req, res) => {
  //const { Body, From, MediaUrl0 } = req.body;
  //const message = { body: Body, from: From, img: MediaUrl0 }
  const{MediaUrl0} = req.body
  imagelink = MediaUrl0
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

