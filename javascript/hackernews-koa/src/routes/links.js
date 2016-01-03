// require our model
var Link = require('../models/link');

// no function handlers with (req, res)
// just use middleware generator functions and set response body in this.body
module.exports = function(router) {
  router.get('/links', function* (next) {
    var links = yield Link.find({}).sort({ upvotes: 'desc' }).exec();
    this.body = links;
  });

  router.post('/links', function* (next) {
    // to access this.request.body, we need koa-body-parser
    var link = yield Link.create({
      title: this.request.body.title,
      URL: this.request.body.URL
    });
    this.body = link;
  });

  router.delete('/links/:id', function* (next) {
    var link = yield Link.remove({ _id: this.params.id }).exec();
    this.body = link;
  });

  router.put('/links/:id/upvote', function* (next) {
    var link = yield Link.upvote(this.params.id);
    this.body = link;
  });
}
