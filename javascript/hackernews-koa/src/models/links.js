var mongoose = require('mongoose');

// defining a schema
var schema = new mongoose.Schema({
  title: { type: String, required: true },
  URL: { type: String, required: true },
  upvotes: { type: Number, required: true, default: 0 },
  timestamp: { type: Date, required: true, default: Date.now }
});

// statics vs methods: http://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
// statics are for the model itself
// methods are for model instances

schema.statics.upvote = function* (linkId) {
  // turning mongo queries into Promises by calling exec();
  // yielding Promises, thunks, generator functions
  return yield this.findByIdAndUpdate(linkId, { $inc: { upvotes: 1 } }).exec();
};

module.exports = mongoose.model('Link', schema);
