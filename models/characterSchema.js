var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var characterSchema = new Schema({
  name: { type: String, required: true },
  image: { type: URL, required: true },
});

var CharacterContent = mogoose.model('characterContent', characterSchema)
module.exports = CharacterContent
