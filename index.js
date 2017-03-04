const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

server.listen(3000);
