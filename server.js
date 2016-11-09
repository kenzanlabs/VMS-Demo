const http = require('http');
const express = require('express');
const request = require('request');
const config = require('./config');

const app = express();

app.set('port', (process.env.PORT || 3001));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/weather', function (req, res) {
  var url = config.baseUrl + config.path;
  req.pipe(request(url))
    .pipe(res);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});