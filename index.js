const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.post('/', (req, res) => {
  const { Body, From, MediaUrl0 } = req.body;
  const message = { body: Body, from: From, img: MediaUrl0 }
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
