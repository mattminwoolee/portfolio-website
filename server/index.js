require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

let PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
// kill $(lsof -t -i:3001)