var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');
var bartCaller = require('./barthelper');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/stations', function (req, res) {
  items.getStations(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/stations', function (req, res) {
  console.log('this is posting', req.body)
  bartCaller.bartCaller(req.body[0], req.body[1], function(err, results) {
  	if (err) {
  		console.log('bart helper error', err);
  	} else {
  		console.log('bart helper results', results)
  		res.json(results);
  	}
  });

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});



// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));