var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , Station = require('./station')

var Route = Schema({
  startStation: {type: Schema.Types.ObjectId, ref: 'Station', required: true},
  endStation: {type: Schema.Types.ObjectId, ref: 'Station', required: true},
  bidirectional: {type: Boolean, default: true, required: true},
  rate: {type: Number, default: 0, required: true}
});

Route.virtual('startStationName').get(function () {
  return this.startStation === null ? this.startStation : this.startStation.stationName
});

Route.virtual('endStationName').get(function () {
  return this.endStation === null ? this.endStation : this.endStation.stationName
});

Route.virtual('startStationNameShort').get(function () {
  return this.startStation === null ? this.startStation : this.startStation.stationName.split(' ',1)
});

Route.virtual('endStationNameShort').get(function () {
  return this.endStation === null ? this.endStation : this.endStation.stationName.split(' ',1)
});

module.exports = mongoose.model('Route', Route);