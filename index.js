require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

let responseObj = {};
app.enable('trust proxy');

// testing the get methods

app.get('/api/whoami', function (req, res) {
  responseObj['ipaddress'] = req.ip
  responseObj['language'] = req.get('Accept-language')
  responseObj['software'] = req.get('User-Agent')
  res.json(responseObj)

})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
