var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
  make: String,
  model: String,
  color: String
})

module.export = mongoose.model('Vehicle, VehicleSchema');
