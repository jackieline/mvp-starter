var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');
var stations = require('./stations');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var stationSchema = mongoose.Schema({
  station: String,
  stationName: String
});

var Station = mongoose.model('Station', stationSchema);

// for (var key in stations.stations) {
//   var stop = new Station({station: key, stationName: stations.stations[key]});
//   stop.save(function(err, stop) {
//     if (err) {
//       return console.error(err);
//     }
//     console.log(stop);
//   });
// }

var getStations = function(callback) {
  Station.find({}, function(err, stations) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, stations);
    }
  });
}


var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});


var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.getStations = getStations;