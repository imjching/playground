// require our model
var Link = require('../models/link');
var validator = require('validator');

// no function handlers with (req, res)
// just use middleware generator functions and set response body in this.body
module.exports = function(router) {
  router.get('/links', function* (next) {
    var links = yield Link.find({}).sort({ upvotes: 'desc' }).exec();
    this.body = links;
  });

  router.post('/links', function* (next) {
    this.assert(typeof this.request.body.title === 'string', 400, 'Title is required');
    this.assert(this.request.body.title.length > 0, 400, 'Title is required');

    this.assert(validator.isURL(this.request.body.URL), 400, 'URL is invalid');

    // to access this.request.body, we need koa-body-parser
    var link = yield Link.create({
      title: this.request.body.title,
      URL: this.request.body.URL
    });
    this.body = link;
  });

  // validation: we consider two cases
  // id not in valid BSON format, and id valid BSON, but entry not found
  router.put('/links/:id', function* (next) {
    this.assert((this.request.body.title || '').length > 0, 400, 'Title is required');

    var link;
    try {
      link = yield Link.findById(this.params.id).exec();
    } catch (err) {
      // if the id is not in a valid BSON format, Mongo will throw a CastError
      if (err.name === 'CastError') {
        this.throw(404, 'Link cannot be found');
      }
    }
    // check if a link document is returned
    // or some error occurred when trying to update
    this.assert(link, 404, 'Link cannot be found');

    // modify the new title
    link.title = this.request.body.title;
    // a thunkified version of the original save() method with callback
    link = (yield link.saveThunk())[0]; // all thunks returns an array (everything except the first param, err)

    this.body = link;
  });

  // validation: we consider two cases
  // id not in valid BSON format, and id valid BSON, but entry not found
  router.delete('/links/:id', function* (next) {
    var link;
    try {
      link = yield Link.remove({ _id: this.params.id }).exec();
    } catch (err) {
      // if the id is not in a valid BSON format, Mongo will throw a CastError
      if (err.name === 'CastError') {
        this.throw(404, 'Link cannot be found');
      }
    }
    // check if a link document is returned
    // or some error occurred when trying to update
    this.assert(link, 404, 'Link cannot be found');

    this.body = link;
  });

  // validation: we consider two cases
  // id not in valid BSON format, and id valid BSON, but entry not found
  router.put('/links/:id/upvote', function* (next) {
    var link;
    try {
      link = yield Link.upvote(this.params.id);
    } catch (err) {
      // if the id is not in a valid BSON format, Mongo will throw a CastError
      if (err.name === 'CastError') {
        this.throw(404, 'Link cannot be found');
      }
    }
    // check if a link document is returned
    // or some error occurred when trying to update
    this.assert(link, 404, 'Link cannot be found');

    this.body = link;
  });
}
