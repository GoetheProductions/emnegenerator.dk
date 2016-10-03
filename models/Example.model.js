var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  title: String,
});

//exporting model
module.exports = mongoose.model('Example', ExampleSchema);