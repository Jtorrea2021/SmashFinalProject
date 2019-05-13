var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var characterSchema = new Schema({
  name: { type: String, required: true },
  image: { type: URL, required: true },
  traits: {
    main: { enum: ['Aggressive', 'Passive', 'Variety'], required: true },
    secondary: { enum: ['Rush', 'Combo', 'Camping', 'Heavyweight', 'Swordfighter', 'Tricky'] }
  },
});

var CharacterContent = mogoose.model('characterContent', characterSchema)
module.exports = CharacterContent
